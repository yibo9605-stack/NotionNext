import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const BlogCard = ({ post, siteInfo }) => {
  const category = post?.category || post?.type || 'Article'
  const date = post?.date?.start_date || post?.publishDay || post?.createdTime

  return (
    <article className='vp-post-card'>
      <div className='vp-post-card-meta'>
        <SmartLink href={`/category/${category}`} className='vp-category-pill'>
          <i className='far fa-file-lines' />
          {category}
        </SmartLink>
        <time>{date}</time>
      </div>

      {post?.publishDay ? (
        <div className='vp-relative-date'>{post.publishDay}</div>
      ) : null}

      <div className='vp-post-card-copy'>
        <h2>
          <SmartLink href={post?.href}>{post?.title}</SmartLink>
        </h2>
        <p>{post?.summary}</p>
      </div>

      <footer className='vp-post-card-footer'>
        <div className='vp-author'>
          {siteInfo?.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={siteInfo.icon} alt='' />
          ) : (
            <span>{String(siteConfig('AUTHOR') || 'N').slice(0, 1)}</span>
          )}
          <span>{siteConfig('AUTHOR')}</span>
        </div>
        <SmartLink href={post?.href} className='vp-read-more'>
          Continue reading <i className='fas fa-arrow-right' />
        </SmartLink>
      </footer>
    </article>
  )
}

export default BlogCard
