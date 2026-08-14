import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import CONFIG from '../config'

const navigationLinks = [
  { name: 'Home', href: '/' },
  {
    name: '随笔',
    href: siteConfig('VITEPRESS_ESSAY_PATH', null, CONFIG)
  },
  {
    name: '博客',
    href: '/blog',
    subMenus: [
      { title: '博客首页', href: '/blog' },
      { title: '标签', href: '/tag' },
      { title: '档案', href: '/archive' }
    ]
  }
]

export const Header = () => {
  const { isDarkMode, toggleDarkMode, locale } = useGlobal()
  const router = useRouter()
  const github = siteConfig('VITEPRESS_GITHUB', null, CONFIG)

  const openSearch = () => {
    router.push('/search')
  }

  return (
    <header className='vp-header'>
      <div className='vp-header-inner'>
        <SmartLink href='/' className='vp-brand'>
          <span className='vp-brand-emoji' aria-hidden='true'>
            😼
          </span>
          <span>{siteConfig('VITEPRESS_SITE_NAME', null, CONFIG)}</span>
        </SmartLink>

        {siteConfig('VITEPRESS_MENU_SEARCH', true, CONFIG) && (
          <button
            type='button'
            className='vp-search-trigger'
            onClick={openSearch}
          >
            <i className='fas fa-search' aria-hidden='true' />
            <span>{locale?.NAV?.SEARCH || '搜索'}</span>
            <kbd>Ctrl K</kbd>
          </button>
        )}

        <nav className='vp-nav' aria-label='Main navigation'>
          {navigationLinks.map((link, index) => (
            <div className='vp-nav-item' key={link.id || link.href || index}>
              <SmartLink
                href={link.href || '#'}
                target={link.target}
                className={
                  router.asPath === link.href ||
                  (link.href !== '/' && router.asPath.startsWith(link.href))
                    ? 'vp-nav-active'
                    : ''
                }
              >
                {link.name || link.title}
                {link.subMenus?.length ? (
                  <i className='fas fa-chevron-down vp-nav-chevron' />
                ) : null}
              </SmartLink>
              {link.subMenus?.length ? (
                <div className='vp-submenu'>
                  {link.subMenus.map((subLink, subIndex) => (
                    <SmartLink
                      key={subLink.id || subLink.href || subIndex}
                      href={subLink.href || '#'}
                      target={subLink.target}
                    >
                      {subLink.title || subLink.name}
                    </SmartLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className='vp-header-actions'>
          <button
            type='button'
            className='vp-theme-toggle'
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>
          {siteConfig('VITEPRESS_SHOW_GITHUB', true, CONFIG) && github ? (
            <a
              className='vp-github-link'
              href={github}
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}
