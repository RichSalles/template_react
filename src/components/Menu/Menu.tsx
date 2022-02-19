import React, { useState, Key, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Menu.scss';
import objectMenu from './locales/menu.json';

// import logo from `../../assets/img/logo-c2tours.svg`;

import MenuPrimary from './MenuPrimary/MenuPrimary';


function Menu() {

    const [open, setOpen] = useState(false);
    const [menuName, setMenuName] = useState('.');

    /* Detecta clique fora da div#wrapper para fechar o menu */
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenuName('.');
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    /* //Detecta clique fora da div#wrapper para fechar o menu\\ */

    return (
        <div id="wrapper" ref={wrapperRef}>
            {/* <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar" style={{ zIndex: 11 }}> */}
            <ul className="navbar-nav sidebar sidebar-dark toggled" id="accordionSidebar" style={{ zIndex: 11 }}>
                <Link className="sidebar-brand d-flex align-items-center justify-content-center py-6 border-bottom-primary" to="#">
                    <div className="sidebar-brand-icon">
                        <img src={process.env.REACT_APP_SERVER_LOGO_SHORT} alt="Logo" style={{ width: '60px', padding: '10px' }} />
                    </div>
                    <div className="sidebar-brand-text d-none">C2tours<span className="font-weight-light">SIG</span></div>
                </Link>

                {objectMenu.menu.default.length > 0 ? objectMenu.menu.default.map((menu: any, index: Key) => (
                    <li key={index} className="nav-item" title={menu.name}>
                        {menu.href === "#"
                            ?
                            <div style={{cursor: "pointer"}} className="nav-link select" id="collapseDashboard" onClick={() => { setOpen(!open); setMenuName(menu.name) }} aria-controls={menu.id} aria-expanded={open}>
                                <FontAwesomeIcon icon={['fad', menu.icon]} />
                                <span className="menu-name">{menu.name}</span>
                            </div>
                            :
                            <Link className="nav-link select" to={menu.href} id="collapseDashboard" onClick={() => { setOpen(!open); setMenuName(menu.name) }} aria-controls={menu.id} aria-expanded={open}>
                                <FontAwesomeIcon icon={['fad', menu.icon]} />
                                <span className="menu-name">{menu.name}</span>
                            </Link>
                        }


                        {menu.submenu.length > 0 ?

                            <MenuPrimary menu={menu} menuName={menuName} setMenuName={setMenuName} />

                            : ''}

                    </li>
                )) : ''}
            </ul>



        </div>

    );
}

export default Menu;