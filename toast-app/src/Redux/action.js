export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

export const addToast = (toastData) => {
    return {
        type: ADD_TOAST,
        payload: { id: Date.now(), ...toastData }
    }
};

export const removeToast = (id) => {
    return {
        type: REMOVE_TOAST,
        payload: id
    }
};
