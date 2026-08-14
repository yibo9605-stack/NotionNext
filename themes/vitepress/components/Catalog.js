import { uuidToId } from 'notion-utils'

const Catalog = ({ toc = [] }) => {
  if (!toc.length) return null

  return (
    <nav className='vp-catalog' aria-label='Table of contents'>
      {toc.map(item => {
        const id = uuidToId(item.id)
        return (
          <a
            key={id}
            href={`#${id}`}
            style={{ paddingLeft: `${item.indentLevel * 14}px` }}
          >
            {item.text}
          </a>
        )
      })}
    </nav>
  )
}

export default Catalog
