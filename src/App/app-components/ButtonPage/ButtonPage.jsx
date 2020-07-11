import React from 'react';
import './ButtonPage.scss';
import { NavLink } from 'react-router-dom';

const ButtonPage = () => {
    return (
        <div className='ButtonPage'>
            <NavLink to='/gallery'>Открыть страницу</NavLink>
        </div>
    );
}

export default ButtonPage;