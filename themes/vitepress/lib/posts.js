const asArray = value => (Array.isArray(value) ? value : [value])

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

export const isEssayPost = (post, essayCategory = '心情随笔') =>
  [
    ...asArray(post?.type),
    ...asArray(post?.category),
    ...asArray(post?.tags)
  ].some(value => String(value || '').trim() === essayCategory)

export const getEssayPosts = (allPages, essayCategory = '心情随笔') =>
  (allPages || [])
    .filter(
      post =>
        post?.status === 'Published' &&
        (!post.password || post.password === '') &&
        isEssayPost(post, essayCategory)
    )
    .sort((a, b) => getPostTime(b) - getPostTime(a))

export const getEssayPostTags = post =>
  [
    ...new Set(
      [
        ...asArray(post?.tags),
        ...asArray(post?.tagItems).map(item => item?.name)
      ]
        .map(tag => (typeof tag === 'string' ? tag : tag?.name))
        .map(tag => String(tag || '').trim())
        .filter(Boolean)
    )
  ]
