import {Link} from "react-router-dom";


export const FormFilmMoment = () => {

    return(

        <Link to="/film" className="text-black bg-white  font-semibold rounded-full
                    text-xs w-40 h-8 ml-5 pt-2 text-center mr-0 mt-12 " type="button">
            Les films du moments
        </Link>
    );

}