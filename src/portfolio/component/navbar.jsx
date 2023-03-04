import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [displayMeun, setDisplayMeun] = useState(false);
    const showMeun = () => setDisplayMeun((displayed) => !displayed)

    const Logo = <NavLink to='/'><span className='font-logo text-xl md:text-lg capitalize'>olamarvel</span></NavLink>
    const meunClass = ({ isActive }) => (isActive ? 'text-shade text-2xl md:text-xl' : 'hover:text-shade') + ' text-xl md:text-lg';
    const meuns = <>
        <NavLink to="/" className={meunClass}>
            <span>home</span>
        </NavLink>
        {['about', 'project', 'contact'].map((meun) =>
            <NavLink to={"/" + meun} className={meunClass} key={meun
            }>
                <span>{meun}</span></NavLink>
        )}
    </>
    return (
        <div className='flex flex-row py-3 px-5'>
            {Logo}
            <div className='flex-grow flex flex-row-reverse h-full items-center cursor md:hidden' onClick={showMeun}>
                {!displayMeun ? <GiHamburgerMenu /> : <AiOutlineClose />}
            </div>
            {displayMeun && <div className='h-screen w-4/6 absolute flex flex-col bg-white  capitalize md:hidden '>
                {Logo}{meuns}
            </div>}
            <div className='hidden md:flex flex-grow  justify-end gap-4 capitalize '>
                {meuns}
            </div>
        </div>
    );
}

export default Navbar;
