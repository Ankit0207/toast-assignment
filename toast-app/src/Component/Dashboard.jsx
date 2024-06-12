import React from 'react';
import { useDispatch } from 'react-redux';
import { addToast } from '../Redux/action';

const Dashboard = () => {
  const dispatch = useDispatch();

  const showToast = (toastData) => {
    dispatch(addToast(toastData));
  };

  return (
    <div style={{display:'flex',gap:'10px'}}>
      <button onClick={()=>{showToast({
        title:'This is a success message!',
        type:'success'
      })}}>Success Toast</button>
      <button onClick={()=>{showToast({
        title:'This is a info message!',
        type:'info'
      })}}>Info Toast</button>
      <button onClick={()=>{showToast({
        title:'This is a error message!',
        type:'error'
      })}}>error Toast</button>
    </div>
  );
};

export default Dashboard;
