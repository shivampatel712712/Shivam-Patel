import React from 'react'
import ContextChildOne from './ContextChildOne'

export default function ContextParent() {
  return (
    <div>
        <h3>Hello from Parent Component</h3>
        <ContextChildOne />
    </div>
  )
}
