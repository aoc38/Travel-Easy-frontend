import { useState } from 'react'
import React from 'react';
import axios from 'axios';
import Card from '../Common/Card';
import Button from '../Common/button';
import './rating.css';
import { Link, useNavigate } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';

const colors ={
  white: "#f4f4f4",
  blue: "#035efc"
}

export default function Feedbackform() {

  let navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    comments: null,
    userRating: null,
  });
  const { comments, userRating } = feedback;
  
  const [currentValue,setCurrentValue] =React.useState(10);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick =value =>{
    setCurrentValue(value);
  }

  const handleMouseOver = value =>{
    setHoverValue(value);
  }

  const handleMouseLeave = () =>{
    setHoverValue(undefined);
  }



const handleChange = (e) =>{
  setFeedback({ ...feedback.userRating, [e.target.name]: e.target.value }); 
}
   const onRatingChange = (e) => {
    setFeedback({ ...feedback.comments, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/feedback", feedback)
    navigate('/home');
  };

  return (

    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <ul className='ratingButton'>
          <li >
            <input
              type='radio'
              id='num1'
              name='userRating'
              value='1'
              checked = {selected=== 1}
              onChange={handleChange}

              color={(hoverValue || currentValue)}
            />
            <label htmlFor='num1'>1</label>
          </li>
          <li>
            <input
              type='radio'
              id='num2'
              name='userRating'
              value='2'
              checked={selected=== 2? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num2'>2</label>
          </li>
          <li>
            <input
              type='radio'
              id='num3'
              name='userRating'
              value='3'
              checked={selected=== 3? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num3'>3</label>
          </li>
          <li>
            <input
              type='radio'
              id='num4'
              name='userRating'
              value='4'
              checked={selected=== 4? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num4'>4</label>
          </li>
          <li>
            <input
              type='radio'
              id='num5'
              name='userRating'
              value='5'
              checked={selected=== 5? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num5'>5</label>
          </li>
          <li>
            <input
              type='radio'
              id='num6'
              name='userRating'
              value='6'
              checked={selected=== 6? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num6'>6</label>
          </li>
          <li>
            <input
              type='radio'
              id='num7'
              name='userRating'
              value='7'
              checked={selected=== 7? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num7'>7</label>
          </li>
          <li>
            <input
              type='radio'
              id='num8'
              name='userRating'
              value='8'
              checked={selected=== 8? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num8'>8</label>
          </li>
          <li>
            <input
              type='radio'
              id='num9'
              name='userRating'
              value='9'
              checked={selected=== 9? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num1'>9</label>
          </li>
          <li>
            <input
              type='radio'
              id='num10'
              name='userRating'
              value='10'
              checked={selected === 10? userRating === selected:false}
              onChange={handleChange}
            />
            <label htmlFor='num1'>10</label>
          </li>
        </ul>
        {/* <div>
          <label>Apple:</label>
          <input type="radio"
            checked={userRating === "apple"}
            value="apple"
            onChange={(e) => onRatingChange(e)} />


          <label>Orange:</label>
          <input type='radio'
            checked={userRating === "orange"}
            value="orange"
            onChange={(e) => onRatingChange(e)} />
        </div> */}


        <div className='input-group'>
          <input
            type={"text"}
            placeholder='Write a review'
            name='comments'
            value={comments}
            onChange={(e) => onRatingChange(e)}
          />
          <input type='submit' label="Send" />


        </div>
      </form>
    </Card>



  )
}
