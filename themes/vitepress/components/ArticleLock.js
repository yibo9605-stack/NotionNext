import { useGlobal } from '@/lib/global'
import { useRef } from 'react'

const ArticleLock = ({ validPassword }) => {
  const { locale } = useGlobal()
  const inputRef = useRef(null)

  const submit = () => {
    if (!validPassword(inputRef.current?.value)) {
      const tips = document.getElementById('vp-lock-tips')
      if (tips) tips.textContent = locale?.COMMON?.PASSWORD_ERROR || '密码错误'
    }
  }

  return (
    <section className='vp-generic-panel vp-lock-panel'>
      <i className='fas fa-lock' />
      <h1>{locale?.COMMON?.ARTICLE_LOCK_TIPS || '这篇文章需要密码'}</h1>
      <div className='vp-lock-form'>
        <input
          ref={inputRef}
          id='password'
          type='password'
          onKeyDown={e => e.key === 'Enter' && submit()}
        />
        <button type='button' onClick={submit}>
          {locale?.COMMON?.SUBMIT || '提交'}
        </button>
      </div>
      <p id='vp-lock-tips' />
    </section>
  )
}

export default ArticleLock
