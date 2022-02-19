import React, { Key } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//CSS
import './MenuSecundary.scss'

function MenuSecundary(props: any) {
    
    return (
        <>
            <div id={props.menu.id} className="menu-level-2" style={{
                borderLeft: props.menu.name === props.menuName ? "" : 'none'
            }}>
                <Collapse in={props.menu.name === props.menuName} dimension="width">
                    <div >
                        <div style={{ width: '300px' }}>
                            <div className="submenu-title">
                                <h2>{props.menu.name}</h2>
                                <FontAwesomeIcon icon={['fal', 'times']} onClick={() => {props.setMenuName('.')}}/>                                  
                            </div>

                            {props.menu.submenu.length > 0 ? props.menu.submenu.map((submenu: any, index: Key) => (
                                
                                <ul key={index} className="submenu">
                                    {submenu.type === "link" ? 
                                        <li className="submenu-item">       
                                            <Link to={submenu.href} >
                                                {submenu.name}
                                            </Link>
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

export default MenuSecundary;