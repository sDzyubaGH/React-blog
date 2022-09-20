import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

export default function PostFilter({ filter, setFilter }) {
  function sortPosts(sort) {
    setFilter({...filter, selectedSort: sort})
  } 

  function setSearchQuery(query) {
    setFilter({...filter, searchQuery: query})
  }

  return (
    <div>
      <MySelect
        value={filter.selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
      <MyInput
        value={filter.searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
      />

    </div>
  )
}
