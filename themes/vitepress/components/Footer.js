import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='vp-footer'>
      <div className='vp-license'>
        <span>Released under the MIT License.</span>
        <span>
          Copyright © 2023-{year}{' '}
          {siteConfig('VITEPRESS_AUTHOR', null, CONFIG)}
        </span>
      </div>
      <div className='vp-filing'>
        <BeiAnSite />
        <BeiAnGongAn />
      </div>
    </footer>
  )
}

export default Footer
