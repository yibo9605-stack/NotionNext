const asArray = value => (Array.isArray(value) ? value : [value])

export const isEssayPost = (post, essayCategory = '心情随笔') =>
  [
    ...asArray(post?.type),
    ...asArray(post?.category),
    ...asArray(post?.tags)
  ].some(value => String(value || '').trim() === essayCategory)

export const getEssayPosts = (allPages, essayCategory = '心情随笔') =>
  (allPages || []).filter(
    post =>
      post?.status === 'Published' &&
      (!post.password || post.password === '') &&
      isEssayPost(post, essayCategory)
  )
