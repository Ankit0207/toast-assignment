import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../Redux/action';
import './style.css';

const Toast = ({toast}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeToast(toast.id));
        }, 3000)

        return () => clearTimeout(timer);
    }, [toast.id]);
    return (
        <div className={`toast toast-${toast.type}`}>
            <p>{toast.title}</p>
        </div>
    )
}

export default Toast
