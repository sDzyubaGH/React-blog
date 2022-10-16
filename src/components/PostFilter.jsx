import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

export default function PostFilter({ filter, setFilter }) {
  function sortPosts(sort) {
    setFilter({...filter, sort: sort})
  } 

  function setSearchQuery(query) {
    setFilter({...filter, query: query})
  }

  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
      <MyInput
        value={filter.query}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
      />

    </div>
  )
}
