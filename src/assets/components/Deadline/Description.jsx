import React from 'react'

export const Description = () => {
  return (
    <div className="description-container">
      <div className="input-desc">
        <h3>Input:</h3>
        <span>Days, hours, minutes until deadline.</span>
      </div>
      <div className="output-desc">
        <h3>Output:</h3>
        <span>Date of deadline.</span>
      </div>
    </div>
  )
}
