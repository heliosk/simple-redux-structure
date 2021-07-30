import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuth } from '../reducers/authReducers';

const Auth = () => {
    const auth = useSelector((state) => state.auth);

    console.log('auth');
    const dispatch = useDispatch();

    console.log('auth', auth);

    const handleAuth = () => {
        console.log('auth');
        //dispatch(toggleAuth());
    };

    return (
        <div>
            <button className="btn btn-info" onClick={handleAuth}>
                {auth.isLoggedIn ? 'logout' : 'login' }
            </button>
        </div>
    )
}

export default Auth;
