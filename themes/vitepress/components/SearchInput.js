import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const SearchInput = ({ keyword = '' }) => {
  const { locale } = useGlobal()
  const router = useRouter()
  const inputRef = useRef(null)

  const search = () => {
    const value = inputRef.current?.value?.trim()
    router.push(value ? `/search/${encodeURIComponent(value)}` : '/')
  }

  return (
    <div className='vp-search-box'>
      <i className='fas fa-search' />
      <input
        ref={inputRef}
        defaultValue={keyword}
        placeholder={locale?.SEARCH?.ARTICLES || '搜索文章'}
        onKeyDown={event => event.key === 'Enter' && search()}
      />
      <button type='button' onClick={search}>
        {locale?.NAV?.SEARCH || '搜索'}
      </button>
    </div>
  )
}

export default SearchInput
