import { NavLink, useNavigate } from 'react-router';
import "./Nav.css"
import { useRef, useState } from 'react';

export default function Nav({ image, items, btn, bars }) {
    const [use, setUse] = useState(false);
    const navigate = useNavigate();

    const menu = useRef();

    const goToSignIn = () => {
        navigate("/signin")
    }

    document.addEventListener("click", handleShowMenu);
    function handleShowMenu(event) {
        if (menu.current && !menu.current.contains(event.target))
            setUse(false);
    }
    
    return (
        <nav>
            <h1>{image}</h1>
            <div ref={menu}  className={`right ${use ? "show" : ""}`}>
                <ul>
                    {
                        items?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} className={(({ isActive }) => isActive ? "active" : "")}>
                                        {item.title}
                                        <div className="icon">{item.icon}</div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                {btn ? <button className='sign' onClick={goToSignIn}>{btn}</button> : ""}
            </div>
            {bars ? <button ref={menu} onClick={() => {
                setUse(use ? false : true);
            }} className='bars'>{bars}</button> : ""}
        </nav>
    )
}
