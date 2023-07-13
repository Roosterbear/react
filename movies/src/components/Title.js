import React from 'react'

// children MUST be between keys !!
// If we make a Title variable, we require the user to keep that name

export const Title =  ({children})=>(
  <h1 className="title">{children}</h1>
)