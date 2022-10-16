import { useMemo, useState } from "react"

export const usePagination = (totalPageCount) => {
  return useMemo(() => {
    const pagesArray = []
    for (let i = 0; i < totalPageCount; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray
  }, [totalPageCount])
}