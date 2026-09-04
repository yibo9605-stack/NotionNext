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

const RollingStoneLoveStory = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutEssay' {...props} />
}

const prepareEssayProps = (props, essayCategory) => {
  const essayPosts = getEssayPosts(props.allPages, essayCategory)
  props.posts = cleanPostSummaries(essayPosts)
  props.postCount = props.posts.length
  delete props.allPages
  return props
}

export async function getStaticProps({ locale }) {
  const initialProps = await fetchGlobalAllData({
    from: 'casual-essay-index',
    locale
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const essayPosts = getEssayPosts(initialProps.allPages, essayCategory)
  let props = initialProps

  if (essayPosts.length > 0) {
    props = await resolvePostProps({
      prefix: essayPosts[0].slug,
      locale,
      from: 'casual-essay-first-post',
      keepAllPages: true
    })
  }

  prepareEssayProps(props, essayCategory)

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export default RollingStoneLoveStory
