import React from 'react'

export default function Post({name}) {
  return (
    <a href='#' className=' font-bold text-neutral-500 hover:text-primary-blue'>{name}</a>
  )
}
