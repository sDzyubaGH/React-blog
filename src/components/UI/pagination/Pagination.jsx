import React from 'react'
import { usePagination } from '../../hooks/usePagination'
import MyButton from '../button/MyButton'

export default function Pagination({ totalPageCount, page, changePage }) {
  const pagesArray = usePagination(totalPageCount)

  return (
    <div className="pagination-btns">
      {
        pagesArray.map((pageNum) =>
          <MyButton onClick={(e) => changePage(pageNum)} className={pageNum === page ? 'current-page' : ''} key={pageNum}>{pageNum}
          </MyButton>)
      }
    </div>
  )
}
