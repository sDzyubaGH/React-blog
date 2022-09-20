import { useMemo } from "react"

export const useSortedPosts = (posts, selectedSort) => {
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }

    return posts
  }, [selectedSort, posts])

  return sortedPosts
}

export const usePosts = (posts, sort, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  return sortedAndSearchedPosts
}