import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll',height: '80vh',
    scrollbarColor: 'transparent',
    '::-webkit-scrollbar': {
    display: 'none'
}}}>
        {props.children}
    </div>
  )
}

export default Scroll