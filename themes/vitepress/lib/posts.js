const asArray = value => (Array.isArray(value) ? value : [value])

const extractLabels = value =>
  asArray(value)
    .flatMap(item => {
      const label =
        typeof item === 'string' ? item : item?.name || item?.value || ''
      return String(label).split(/[,，]/)
    })
    .map(label => label.trim())
    .filter(Boolean)

const normalizeLabel = label =>
  String(label || '')
    .replace(/\s+/g, '')
    .toLowerCase()

const hasPassword = value => extractLabels(value).length > 0

const getPostTime = post => {
  const value =
    post?.publishDate ||
    post?.date?.start_date ||
    post?.publishDay ||
    post?.createdTime
  if (typeof value === 'number') return value
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export const isEssayPost = (post, essayCategory = '心情随笔') => {
  const essayLabels = new Set(
    [...extractLabels(essayCategory), '心情随笔', '随笔'].map(normalizeLabel)
  )
  const postLabels = [
    ...extractLabels(post?.type),
    ...extractLabels(post?.category),
    ...extractLabels(post?.tags),
    ...extractLabels(post?.tagItems)
  ]
  return postLabels.some(label => essayLabels.has(normalizeLabel(label)))
}

export const getEssayPosts = (allPages, essayCategory = '心情随笔') =>
  (allPages || [])
    .filter(
      post =>
        post?.status === 'Published' &&
        !hasPassword(post.password) &&
        isEssayPost(post, essayCategory)
    )
    .sort((a, b) => getPostTime(b) - getPostTime(a))

export const getEssayPostTags = post =>
  [
    ...new Set([
      ...extractLabels(post?.tags),
      ...extractLabels(post?.tagItems)
    ])
  ]
