import { useState } from 'react'
import React from 'react';
import Selectrating from './selectrating';
import Card from '../Common/Card';
import Button from '../Feedback/button';
import './rating.css';

export default function Feedbackform(props)
{
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
      // prettier-ignore
        } else if (value.trim().length < 10) { // 👈 check for less than 10
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
          const newFeedback = {
            text,
            rating,
          }
          setBtnDisabled(true) 
      setRating(10) 
      setText('')
        }}

    return (
          
           <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us?</h2>
                    <Selectrating select={setRating} selected={rating} />
                    <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
            />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        
      </form>
    </Card>
    
            
    
    )
}
