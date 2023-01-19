import {Link} from "react-router-dom";
import  react from "react";
import rectangle1158 from "../../assets/images/rectangle1158.svg";
import logo from "../../assets/images/logo.png";
import index from "../../assets/CSS/index.css";
//import partieHotFilmsDu from "../../assets/partieHotFilmsDu.svg";
export const Home = (props)=>{


    return (
        <div className="text-white w-full h-full bg-white flex-col justify-between
                                        items-center pb-4 text-xs font-semibold leading-4 flex">

            <div className="text-white w-full h-full bg-black flex-row justify-start
                                        items-stretch text-xs font-semibold leading-3 flex">

                <div className="h-full bg-black flex-row justify-between items-center pl-6 pr-2 flex">
                    <Link to="/">
                        <img className="w-24 h-20 object-cover bg-center bg-cover" src={logo} />

                    </Link>
                    <Link to="tops shows" className="mt-1 text-sm">tops shows</Link>
                    <Link to="tops stars" className="mt-1 text-sm">tops stars</Link>
                    <Link to="Ma liste" className="mt-1 text-sm">Ma liste</Link>
                    <div className="text-gray-400 flex-row justify-between items-center mb-1 ml-16 pl-3 font-light flex">
                        <span className="mt-0">recherche</span>
                        <img className="w-10 h-8 object-cover" src={rectangle1158} />
                    </div>
                    <Link to="/Login" className="text-center w-32 rounded-lg text-sm leading-3 flex-row justify-center
                                    items-center mb-0 ml-3 pt-2 pb-2 pl-6 pr-6 font-medium flex">
                                    Connectez vous
                    </Link>

                    <Link to="/Register" className="text-center w-32 rounded-lg text-sm leading-3 flex-row justify-center
                                    items-center mb-0 ml-3 pt-2 pb-2 pl-6 pr-6 font-medium flex">
                                    Créer un compte
                    </Link>

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

