import React from 'react'

export default function Project({description,link,btnText}) {
  return (
    <li>{description}<a className="btn-projects" href={link} target="_blank">{btnText}</a></li>
  )
}