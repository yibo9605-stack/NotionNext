import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'

const Pagination = ({ page = 1, postCount = 0 }) => {
  const { locale, NOTION_CONFIG } = useGlobal()
  const router = useRouter()
  const pageSize = Number(siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG))
  const totalPages = Math.max(1, Math.ceil(postCount / pageSize))
  const currentPage = Number(page)
  const base = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  if (totalPages <= 1) return null

  return (
    <nav className='vp-pagination' aria-label='Pagination'>
      {currentPage > 1 ? (
        <SmartLink
          href={
            currentPage === 2 ? `${base}/` : `${base}/page/${currentPage - 1}`
          }
        >
          <i className='fas fa-arrow-left' />{' '}
          {locale?.PAGINATION?.PREV || '上一页'}
        </SmartLink>
      ) : (
        <span />
      )}
      <span>
        {currentPage} / {totalPages}
      </span>
      {currentPage < totalPages ? (
        <SmartLink href={`${base}/page/${currentPage + 1}`}>
          {locale?.PAGINATION?.NEXT || '下一页'}{' '}
          <i className='fas fa-arrow-right' />
        </SmartLink>
      ) : (
        <span />
      )}
    </nav>
  )
}

export default Pagination
