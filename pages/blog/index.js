import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { cleanPostSummaries, fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'
import CONFIG from '@/themes/vitepress/config'
import { isEssayPost } from '@/themes/vitepress/lib/posts'

const Blog = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
}

export async function getStaticProps({ locale }) {
  const props = await fetchGlobalAllData({ from: 'blog-index', locale })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const allPosts = (props.allPages || []).filter(
    page =>
      page.type === 'Post' &&
      page.status === 'Published' &&
      !isEssayPost(page, essayCategory)
  )
  const postsPerPage = siteConfig(
    'POSTS_PER_PAGE',
    12,
    props?.NOTION_CONFIG
  )

  props.posts = cleanPostSummaries(allPosts.slice(0, postsPerPage))
  props.postCount = allPosts.length
  props.page = 1
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

export default Blog
