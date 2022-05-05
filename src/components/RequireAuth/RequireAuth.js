import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user] = 
    if(user)
    return children;
};

export default RequireAuth;