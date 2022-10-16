export default function getPageCount(totalPageCount, limit) {
  return Math.ceil(totalPageCount / limit)
}