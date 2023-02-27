import {Link} from "react-router-dom";

export const LandingPage = (props) => {


    return (

        <div>
            <p>Home</p>
            <p className="mt-7">
                <Link to="/Register" className="text-red-600 hover:underline">Inscrivez-Vous</Link>
            </p>
            <p className="mt-7">
                <Link to="/Login" className="text-red-600 hover:underline">Connecter vous</Link>
            </p>
            <p className="mt-7">
                <Link to="/home" className="text-red-600 hover:underline">Accueil</Link>
            </p>

            <p className="mt-7">
                <Link to="/BioActor" className="text-red-600 hover:underline">Biographie acteur</Link>
            </p>

            <p className="mt-7">
                <Link to="/BioRealisateur" className="text-red-600 hover:underline">BioRealisateur</Link>
            </p>

        </div>


    );
}

