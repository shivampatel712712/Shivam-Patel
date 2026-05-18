import React, {useContext} from 'react'
import ContextData from './ContextData';
import ContextChildTwo from './ContextChildTwo';
//import ContextData from './ContextData';

export default function ContextChildOne() {
    let name = useContext(ContextData);
  return (
    <div>
        <h3>This is Context Child Level 1</h3> 
        <h4>Hello {name}</h4>
        <ContextChildTwo/>
    </div>
  )
}
