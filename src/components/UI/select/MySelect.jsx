import React from 'react'
import cl from './MySelect.module.css'

export default function MySelect({ value, onChange, options, defaultValue }) {

  return (
    <select 
    className={cl.mySelect}
    value={value} 
    onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options && options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  )
}
