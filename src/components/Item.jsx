import React from 'react'

const Item = (props) => {
  return (
    <span className='
    flex py-2 px-4
    bg-cyan-500 rounded
    hover:bg-cyan-400
    text-white
    cursor-pointer
    justify-center
    items-center
    font-bold'>
        {props.name}
    </span>
  )
}

export default Item