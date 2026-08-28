import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { cleanPostSummaries, fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'
import CONFIG from '@/themes/vitepress/config'
import { isEssayPost } from '@/themes/vitepress/lib/posts'

const RollingStoneLoveStory = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutEssay' {...props} />
}

export async function getStaticProps({ locale }) {
  const props = await fetchGlobalAllData({
    from: 'casual-essay',
    locale
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const essayPosts = props.allPages?.filter(
    page => page.status === 'Published' && isEssayPost(page, essayCategory)
  )
  props.posts = cleanPostSummaries(essayPosts || [])
  props.postCount = props.posts.length
  delete props.allPages

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
