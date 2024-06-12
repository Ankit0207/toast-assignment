import React from 'react';
import { useSelector } from 'react-redux';
import Toast from './Toast';
import './style.css';

const ToastContainer = () => {
  const toasts = useSelector((store) => store.toastReducer.toasts);
  console.log(toasts)

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
