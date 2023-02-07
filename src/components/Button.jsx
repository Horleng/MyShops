import React from 'react'

export default function Button(props) {
  return (
    <button className={"py-2 text-gray-400 w-[120px] rounded-lg "+props.bg}>
        {props.children}
    </button>
  )
}
