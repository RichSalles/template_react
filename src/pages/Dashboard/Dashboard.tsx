import React from 'react';
/* import React, { useState, Key } from 'react'; */
/* import { Link } from 'react-router-dom';
 */import './Dashboard.scss'

//COMPONENTS
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

//ICONS
/* import iconGlobe from '../../assets/icons/fa-globe-americas.svg'; */

function Dashboard() {

    return (
        <>
            <div className="d-flex">
                <Menu />
                
                <div style={{
                    width: "100%"
                }}>
                    <Header />

                </div>


            </div>
        </>

    );
}

export default Dashboard;