import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { cleanPostSummaries, fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'
import CONFIG from '@/themes/vitepress/config'
import { isEssayPost } from '@/themes/vitepress/lib/posts'

const BlogPage = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
}

const getBlogPosts = (allPages, essayCategory) =>
  (allPages || []).filter(
    page =>
      page.type === 'Post' &&
      page.status === 'Published' &&
      !isEssayPost(page, essayCategory)
  )

export async function getStaticPaths({ locale }) {
  const { allPages, NOTION_CONFIG } = await fetchGlobalAllData({
    from: 'blog-page-paths',
    locale
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const postsPerPage = siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)
  const totalPages = Math.ceil(
    getBlogPosts(allPages, essayCategory).length / postsPerPage
  )

  return {
    paths: Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
      params: { page: String(index + 2) }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params: { page }, locale }) {
  const props = await fetchGlobalAllData({
    from: `blog-page-${page}`,
    locale
  })
  const essayCategory = siteConfig(
    'VITEPRESS_ESSAY_CATEGORY',
    '心情随笔',
    CONFIG
  )
  const allPosts = getBlogPosts(props.allPages, essayCategory)
  const postsPerPage = siteConfig(
    'POSTS_PER_PAGE',
    12,
    props?.NOTION_CONFIG
  )
  const currentPage = Number(page)

  props.posts = cleanPostSummaries(
    allPosts.slice(
      postsPerPage * (currentPage - 1),
      postsPerPage * currentPage
    )
  )
  props.postCount = allPosts.length
  props.page = currentPage
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

export default BlogPage
