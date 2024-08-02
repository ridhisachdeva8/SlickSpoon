import React from 'react'

export default function ReviewBox({ rating, date, review, username }) {
  return (
    <div className="review-box">
      <div className="review-header">
        <span className="review-rating">Rating: {rating}</span>
        <span className="review-date">{date}</span>
      </div>
      <p className="review-content">{review}</p>
      <p className="review-username">- {username}</p>
    </div>
  )
}
