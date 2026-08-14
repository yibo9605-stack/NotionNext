import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import CONFIG from '../config'

const fallbackLinks = locale => [
  { name: locale?.NAV?.HOME || '首页', href: '/' },
  {
    name: locale?.COMMON?.CATEGORY || '分类',
    href: '/category',
    show: siteConfig('VITEPRESS_MENU_CATEGORY', true, CONFIG)
  },
  {
    name: locale?.COMMON?.TAGS || '标签',
    href: '/tag',
    show: siteConfig('VITEPRESS_MENU_TAG', true, CONFIG)
  },
  {
    name: locale?.NAV?.ARCHIVE || '归档',
    href: '/archive',
    show: siteConfig('VITEPRESS_MENU_ARCHIVE', true, CONFIG)
  }
]

export const Header = props => {
  const { customMenu, siteInfo } = props
  const { isDarkMode, toggleDarkMode, locale } = useGlobal()
  const router = useRouter()
  const links =
    siteConfig('CUSTOM_MENU') && customMenu?.length
      ? customMenu
      : fallbackLinks(locale)
  const github = siteConfig('CONTACT_GITHUB')

  const openSearch = () => {
    router.push('/search')
  }

  return (
    <header className='vp-header'>
      <div className='vp-header-inner'>
        <SmartLink href='/' className='vp-brand'>
          {siteInfo?.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={siteInfo.icon} alt='' className='vp-brand-icon' />
          ) : (
            <span className='vp-brand-fallback'>N</span>
          )}
          <span>{siteConfig('TITLE')}</span>
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
          {links
            ?.filter(link => link?.show !== false)
            .map((link, index) => (
              <div className='vp-nav-item' key={link.id || link.href || index}>
                <SmartLink href={link.href || '#'} target={link.target}>
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
