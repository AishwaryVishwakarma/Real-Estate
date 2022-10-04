import React from 'react'
import Option from './Option'

const Select = (props) => {
  return (
    <select
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
    >
        <Option options={props.options} />
    </select>
  )
}

export default Select