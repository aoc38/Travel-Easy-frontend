import { useState } from 'react'
import React from 'react';
import axios from 'axios';
import Card from '../Common/Card';
import Button from '../Common/button';
import './rating.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Feedbackform(props)
{
  let navigate = useNavigate();

  const[feedback,setFeedback] =useState({
    comments:null,
    userRating:null,
  });
    const{comments,userRating}=feedback;
    //const {userRating}=feedback.rating;

    const onRatingChange=(e) =>{
//setFeedback({...feedback,...{rating:{...feedback.rating,[e.target.name]:e.target.value}}});
    setFeedback({...feedback,[e.target.name]:e.target.value});
   
};

    //const onInputChange=(e)=>{
   //   setFeedback({...feedback,[e.target.name]:e.target.value});
    //};
    const handleSubmit = async (e) => {
      e.preventDefault()
      await axios.post("http://localhost:8080/feedback",feedback)
      navigate('/home');
     
    
      };

    return (
          
           <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us?</h2>
                    <ul className='rating'>
                        <li>
                          <input
                            type='radio'
                            id='num1'
                            name='rating'
                            value='1'
                            checked={userRating ===1}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num1'>1</label>
                        </li>
                        <li>
                          <input
                            type='radio'
                            id='num2'
                            name='rating'
                            value='2'
                            checked={userRating ===2}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num2'>2</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num3'
                            name='rating'
                            value='3'
                            checked={userRating ===3}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num3'>3</label>
                        </li>
                        <li>
                          <input
                            type='radio'
                            id='num4'
                            name='rating'
                            value='4'
                            checked={userRating ===4}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num4'>4</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num5'
                            name='rating'
                            value='5'
                            checked={userRating ===5}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num5'>5</label>
                        </li>  
                        <li>
                          <input
                            type='radio'
                            id='num6'
                            name='rating'
                            value='6'
                            checked={userRating ===6}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num6'>6</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num7'
                            name='rating'
                            value='7'
                            checked={userRating ===7}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num7'>7</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num8'
                            name='rating'
                            value='8'
                            checked={userRating ===8}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num8'>8</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num9'
                            name='rating'
                            value='9'
                            checked={userRating ===9}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num1'>9</label>
                        </li> 
                        <li>
                          <input
                            type='radio'
                            id='num10'
                            name='rating'
                            value='10'
                            checked={userRating ===10}
                            onChange={(e) => onRatingChange(e)}
                            />
                          <label htmlFor='num1'>10</label>
                        </li> 
                        </ul>
                      <div>
                          <label>Apple:</label>
                          <input type="radio"
                          checked={userRating ==="apple"}
                          value="apple"
                          onChange={(e) => onRatingChange(e)}/>

                        
                        <label>Orange:</label>
                          <input type='radio'
                          checked={userRating ==="orange"}
                          value="orange"
                          onChange={(e) => onRatingChange(e)}/>
                      </div>    
                        
                    
                    <div className='input-group'>
                    <input
                        type={"text"}
                        placeholder='Write a review'
                        name='comments'
                        value={comments}                      
                        onChange={(e) => onRatingChange(e)}
                     />
          <Button type='submit'>
            Send
          </Button>
        </div>

        
      </form>
    </Card>
    
            
    
    )
}
