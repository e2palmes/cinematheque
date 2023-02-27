import {Link} from "react-router-dom";


export const FormRegister = () => {

    return(
        <Link to="/register" className="text-black bg-red-600  font-small rounded-lg
                    text-xs w-40 h-8 ml-5 pt-2 text-center mr-4" type="button">
            Créer un compte
        </Link>

    );

}