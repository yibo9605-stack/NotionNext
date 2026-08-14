'use client'

import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ArticleLock from './components/ArticleLock'
import BlogCard from './components/BlogCard'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import { Header } from './components/Header'
import Pagination from './components/Pagination'
import SearchInput from './components/SearchInput'
import CONFIG from './config'
import { Style } from './style'

const PageHeading = ({ eyebrow, title, description }) => (
  <header className='vp-page-heading'>
    <div className='vp-eyebrow'>
      <span />
      {eyebrow}
      <span />
    </div>
    <h1>{title}</h1>
    {description ? <p>{description}</p> : null}
    <div className='vp-heading-rule' />
  </header>
)

const LayoutBase = props => {
  const { children } = props
  return (
    <div
      id='theme-vitepress'
      className={`${siteConfig('FONT_STYLE')} min-h-screen`}
    >
      <Style />
      <Header {...props} />
      <main className='vp-main'>{children}</main>
      <Footer />
      <button
        type='button'
        className='vp-back-top'
        aria-label='Back to top'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className='fas fa-arrow-up' />
      </button>
    </div>
  )
}

const LayoutIndex = props => <LayoutPostList {...props} />

const LayoutPostList = props => {
  const {
    posts = [],
    category,
    tag,
    keyword,
    siteInfo,
    page,
    postCount
  } = props
  const title =
    category ||
    tag ||
    (keyword
      ? `“${keyword}”`
      : siteConfig('VITEPRESS_HOME_TITLE', 'Blog', CONFIG))
  const eyebrow = category
    ? 'CATEGORY'
    : tag
      ? 'TAG'
      : keyword
        ? 'SEARCH'
        : siteConfig('VITEPRESS_HOME_EYEBROW', 'JOURNAL', CONFIG)

  return (
    <section className='vp-list-panel'>
      <PageHeading
        eyebrow={eyebrow}
        title={title}
        description={
          !category && !tag && !keyword ? siteConfig('DESCRIPTION') : null
        }
      />
      <div id='posts-wrapper' className='vp-post-grid'>
        {posts.map(post => (
          <BlogCard key={post.id} post={post} siteInfo={siteInfo} />
        ))}
      </div>
      {!posts.length ? <div className='vp-empty'>暂无文章</div> : null}
      <Pagination page={page} postCount={postCount} />
    </section>
  )
}

const LayoutSlug = props => {
  const { post, lock, validPassword, prev, next } = props
  const { locale } = useGlobal()
  const router = useRouter()

  useEffect(() => {
    if (!post && !lock) {
      const timer = setTimeout(
        () => {
          if (
            isBrowser &&
            !document.querySelector('#article-wrapper #notion-article')
          ) {
            router.push('/404')
          }
        },
        Number(siteConfig('POST_WAITING_TIME_FOR_404') || 8) * 1000
      )
      return () => clearTimeout(timer)
    }
  }, [post, lock, router])

  if (lock) return <ArticleLock validPassword={validPassword} />
  if (!post) return null

  const category = post.category || post.type || 'Article'

  return (
    <article className='vp-article-page'>
      <header className='vp-article-hero'>
        <div className='vp-eyebrow'>
          <span />
          FEATURE
          <span />
        </div>
        <time>
          {post.date?.start_date || post.publishDay || post.createdTime}
        </time>
        <h1>{post.title}</h1>
        <div className='vp-heading-rule' />
      </header>

      <div className='vp-article-layout'>
        <aside className='vp-article-sidebar'>
          <SmartLink
            href={`/category/${category}`}
            className='vp-category-pill vp-category-wide'
          >
            <i className='far fa-file-lines' /> {category}
          </SmartLink>

          {post.tags?.length ? (
            <section className='vp-sidebar-card'>
              <h2>TAGGED IN</h2>
              <div className='vp-tag-list'>
                {post.tags.map(tag => (
                  <SmartLink key={tag} href={`/tag/${encodeURIComponent(tag)}`}>
                    #{tag}
                  </SmartLink>
                ))}
              </div>
            </section>
          ) : null}

          {post.toc?.length ? (
            <section className='vp-toc-block'>
              <h2>{locale?.COMMON?.TABLE_OF_CONTENTS || '目录'}</h2>
              <Catalog toc={post.toc} />
            </section>
          ) : null}
        </aside>

        <div className='vp-article-column'>
          <div className='vp-article-category-mobile'>
            <span className='vp-category-pill'>
              <i className='far fa-file-lines' /> {category}
            </span>
          </div>
          <div id='article-wrapper' className='vp-prose'>
            <NotionPage post={post} />
          </div>
          <ShareBar post={post} />

          <nav className='vp-article-around'>
            {prev ? (
              <SmartLink href={prev.href}>
                <small>PREVIOUS ARTICLE</small>
                {prev.title}
              </SmartLink>
            ) : (
              <span />
            )}
            {next ? (
              <SmartLink href={next.href}>
                <small>NEXT ARTICLE</small>
                {next.title}
              </SmartLink>
            ) : (
              <span />
            )}
          </nav>

          <section className='vp-comments'>
            <Comment frontMatter={post} />
          </section>
        </div>
      </div>
    </article>
  )
}

const LayoutSearch = props => {
  const { keyword } = props
  useEffect(() => {
    if (isBrowser && keyword) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: { element: 'span', className: 'vp-search-highlight' }
      })
    }
  }, [keyword])

  return (
    <section className='vp-list-panel'>
      <PageHeading eyebrow='SEARCH' title='Search' />
      <SearchInput keyword={keyword} />
      {keyword ? (
        <div id='posts-wrapper' className='vp-post-grid vp-search-results'>
          {props.posts?.map(post => (
            <BlogCard key={post.id} post={post} siteInfo={props.siteInfo} />
          ))}
        </div>
      ) : null}
    </section>
  )
}

const LayoutArchive = ({ archivePosts = {} }) => (
  <section className='vp-generic-panel'>
    <PageHeading eyebrow='JOURNAL' title='Archive' />
    <div className='vp-archive'>
      {Object.keys(archivePosts)
        .sort()
        .reverse()
        .map(group => (
          <section key={group}>
            <h2>{group}</h2>
            {archivePosts[group].map(post => (
              <SmartLink
                key={post.id}
                href={post.href}
                className='vp-archive-row'
              >
                <span>{post.title}</span>
                <time>{post.publishDay}</time>
              </SmartLink>
            ))}
          </section>
        ))}
    </div>
  </section>
)

const LayoutCategoryIndex = ({ categoryOptions = [] }) => (
  <section className='vp-generic-panel'>
    <PageHeading eyebrow='EXPLORE' title='Categories' />
    <div className='vp-taxonomy-grid'>
      {categoryOptions.map(item => (
        <SmartLink key={item.name} href={`/category/${item.name}`}>
          <i className='far fa-folder' />
          <span>{item.name}</span>
          <small>{item.count} posts</small>
        </SmartLink>
      ))}
    </div>
  </section>
)

const LayoutTagIndex = ({ tagOptions = [] }) => (
  <section className='vp-generic-panel'>
    <PageHeading eyebrow='EXPLORE' title='Tags' />
    <div className='vp-tag-cloud'>
      {tagOptions.map(item => (
        <SmartLink
          key={item.name}
          href={`/tag/${encodeURIComponent(item.name)}`}
        >
          #{item.name}
          <span>{item.count || 0}</span>
        </SmartLink>
      ))}
    </div>
  </section>
)

const Layout404 = () => (
  <section className='vp-not-found'>
    <strong>404</strong>
    <h1>PAGE NOT FOUND</h1>
    <p>你访问的页面不存在或已经移动。</p>
    <SmartLink href='/'>返回首页</SmartLink>
  </section>
)

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
