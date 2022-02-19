import React, { useState, Key, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom';

import MenuSecundary from '../MenuSecundary/MenuSecundary';

//CSS
import './MenuPrimary.scss'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuPrimary(props: any) {
    const [open2, setOpen2] = useState(false);
    const [menuName2, setMenuName2] = useState('.');

    useEffect(() => {
        if (props.menuName === '.') {
            setMenuName2('.');
        }
    }, [props.menuName])

    return (
        <>
            <div id={props.menu.id} className="menu-level-1" style={{

            }}>
                <Collapse in={props.menu.name === props.menuName} dimension="width">
                    <div>
                        <div style={{ width: '300px' }}>
                            <div className="submenu-title">
                                <h2>{props.menu.name}</h2>
                                <FontAwesomeIcon icon={['fal', 'times']} onClick={() => { props.setMenuName('.') }} />
                            </div>

                            {props.menu.submenu.length > 0 ? props.menu.submenu.map((submenu: any, index: Key) => (
                                <ul key={index} className="submenu">
                                    {submenu.type === "link" ?
                                        <li className="submenu-item">
                                            {submenu.href === "#"
                                                ?
                                                <a href='#' style={{ cursor: "pointer" }} onClick={() => { setOpen2(!open2); setMenuName2(submenu.name) }} aria-controls={submenu.id} aria-expanded={open2}>
                                                    {submenu.name}
                                                </a>
                                                :
                                                <Link to={submenu.href} onClick={() => { setOpen2(!open2); setMenuName2(submenu.name) }} aria-controls={submenu.id} aria-expanded={open2}>
                                                    {submenu.name}
                                                </Link>
                                            }


                                            {submenu.submenu.length > 0 ?

                                                <MenuSecundary menu={submenu} menuName={menuName2} setMenuName={setMenuName2} />

                                                : ''}
                                        </li>
                                        :
                                        <li className="submenu-title">
                                            {submenu.name}
                                        </li>
                                    }
                                </ul>

                            )) : ''}
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default MenuPrimary;