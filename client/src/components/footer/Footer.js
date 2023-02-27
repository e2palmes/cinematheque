/* eslint-disable jsx-a11y/anchor-is-valid */
//import react
import React from 'react';

//import l'image de footer
import footerImage from '../../assets/Images/7thfloor.png';
//import copyright icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


//function that return  the footer
export const Footer = () => {
    //auto date copyright
    const year = new Date().getFullYear();

    return (

        <footer className="d-flex align-items-end">
            <div className="flex justify-between">
                <img src={footerImage} alt="Footer" className="w-1/6"/>
                {/* navbar*/}
                <nav className="ml-auto">
                    <Link to="/accueil">Accueil &nbsp; &nbsp;</Link>
                    <Link to="#" href="#">A propos &nbsp; &nbsp;</Link>
                    <Link to="#">Mon Compte &nbsp; &nbsp;</Link>
                </nav>
            </div>
            {/* used imported icon*/}
            <div className="ml-auto" style={{fontSize: '80%'}}>
                <FontAwesomeIcon icon={faCopyright}/> Copyright {year}
            </div>
        </footer>


    );


}

export default Footer;
