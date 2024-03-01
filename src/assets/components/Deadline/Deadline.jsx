import React from 'react'
import { Heading } from '../Heading/Heading'
import { Form } from './Form'
import { Description } from './Description'

export const Deadline = () => {

  return (
    <>
      <Heading text="wen deadline"/>
      <div className="inner-content-container">
        <Description/>
        <Form/>
      </div>
    </>
  )
}