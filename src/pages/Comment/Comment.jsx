import React from 'react'
import './Comment.css'

const Comment = () => {
  return (
    <div className='comment-container'>
        <h1>Comment section.</h1>
        <small>Write the reason why your visitor is late.</small>
        <textarea className='textarea' name="comment" id="comment" />
        <button>Submmit</button>
    </div>
  )
}

export default Comment