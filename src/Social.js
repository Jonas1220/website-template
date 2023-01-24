import React from 'react'

export default function Social({description,link}) {
  return (
    <a href={link} className="btn-contact">{description}</a>
  )
}
