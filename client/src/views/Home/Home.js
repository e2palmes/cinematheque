import {Link} from "react-router-dom";
import  react from "react";
import rectangle1158 from "../../assets/rectangle1158.svg";
import logo from "../../assets/logo.png";
import  App from  "../../assets/App.css";
import partieHotFilmsDu from "../../assets/partieHotFilmsDu.svg";
export const Home = (props)=>{


    return (
        <div className="page-dacceuil">
            <div className="navbar">
                <div className="navbar-9">
                    <Link to="/">
                        <img className="rectangle-9" src={logo} />

                    </Link>
                    <Link to="tops shows" className="tops-shows">tops shows</Link>
                    <Link to="tops stars" className="tops-stars">tops stars</Link>
                    <Link to="Ma liste" className="ma-liste">Ma liste</Link>
                    <div className="rectangle-1157">
                        <span className="recherche">recherche</span>
                        <img className="rectangle-1158" src={rectangle1158} />
                    </div>
                    <Link to="/Login" className="button">Connectez vous</Link>
                    <Link to="/Register" className="button-1">Créer un compte</Link>
                </div>
            </div>



            {/* <div className="footer">
                <div className="flex-container-21">
                    <img className="rectangle-9-1" src={logo} />
                    <span>@Copyright 2022</span>
                </div>
                <span className="a-propos">A propos</span>
            </div>*/}
        </div>
    );


        {/*  <div>
            <p>Home</p>
            <p className="mt-7">
                <Link to="/Register" className="text-red-600 hover:underline">Inscrivez-Vous</Link>
            </p>
            <p className="mt-7">
                <Link to="/Login" className="text-red-600 hover:underline">Connecter vous</Link>
            </p>

        </div> */}





};

