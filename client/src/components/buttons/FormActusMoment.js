import {Link} from "react-router-dom";


export const FormActusMoment = () => {

    return(
        <Link to="#actus" className="text-black bg-white font-semibold rounded-full
                        text-xs w-40 h-8 pt-2 text-center mt-12" type="button">
            Les actus du moments
        </Link>

    );

}