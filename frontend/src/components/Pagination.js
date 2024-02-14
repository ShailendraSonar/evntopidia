import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Pagination = (props) => {


  const navigate=useNavigate();
  function hendlePrevious() {
    props.setPage(props.Page-1)
  }
  const handleNext = () => {
    props.setPage(props.Page + 1);
  };
  const handleSubmit=async()=>{
    try {
      console.log(Object.assign(props.Page1Data,props.Page2Data));
      let obj=Object.assign(props.Page1Data,props.Page2Data);
      let APIuRL = 'http://localhost:3001/register';
      const response = await axios.post(APIuRL, obj);
      console.log(response);
      localStorage.setItem("token",response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full">
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {
          props.Page > 1 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={hendlePrevious}>Previous</button>
        }
        {
          props.Page < 2 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={handleNext}>Next</button>
        }
        {
          props.Page === 2 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={handleSubmit}>Submit</button>
        }

        <p className='text-sm font-semibold ml-auto'>page {props.Page} of 2</p>
      </div>
    </div>
  )
}

export default Pagination