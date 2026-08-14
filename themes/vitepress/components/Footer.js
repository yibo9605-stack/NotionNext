import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'

const Footer = () => (
  <footer className='vp-footer'>
    <div>
      <CopyRightDate />
      <PoweredBy />
    </div>
    <div className='vp-filing'>
      <BeiAnSite />
      <BeiAnGongAn />
    </div>
  </footer>
)

export default Footer
