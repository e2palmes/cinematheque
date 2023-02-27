import {Link} from "react-router-dom";


export const FormLogin = () => {

    return(
        <Link to="/login" className="text-black bg-white font-small rounded-lg
                        text-xs w-40 h-8 pt-2 text-center" type="button">
            Connectez vous
        </Link>

    );

}