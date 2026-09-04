import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import {
  cleanPostSummaries,
  fetchGlobalAllData,
  resolvePostProps
} from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'
import CONFIG from '@/themes/vitepress/config'
import { getEssayPosts } from '@/themes/vitepress/lib/posts'

const isStaticExport = process.env.EXPORT === 'true'

const EssayPost = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutEssay' {...props} />
}

export async function getStaticPaths({ locale }) {
  const props = await fetchGlobalAllData({
    from: 'casual-essay-paths',
    locale
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const paths = getEssayPosts(props.allPages, essayCategory)
    .filter(post => post.slug && post.slug !== 'RollingStoneLoveStory')
    .map(post => ({
      params: {
        slug: post.slug.split('/').filter(Boolean)
      }
    }))

  return {
    paths,
    fallback: isStaticExport ? false : 'blocking'
  }
}

export async function getStaticProps({ params: { slug }, locale }) {
  const selectedSlug = Array.isArray(slug) ? slug.join('/') : slug
  const props = await resolvePostProps({
    prefix: selectedSlug,
    locale,
    from: `casual-essay-${selectedSlug}`,
    keepAllPages: true
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const essayPosts = getEssayPosts(props.allPages, essayCategory)
  const isValidEssay = essayPosts.some(item => item.id === props.post?.id)

  props.posts = cleanPostSummaries(essayPosts)
  props.postCount = props.posts.length
  delete props.allPages

  return {
    props,
    revalidate: isStaticExport
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        ),
    notFound: !isValidEssay
  }
}

export default EssayPost