import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import actorsIcon from "../../assets/Svg/celebrities.svg"
import { faMasksTheater, faCameraRetro, faVideo, faHouse} from "@fortawesome/free-solid-svg-icons";
export const Links = (props)=>{
    const {name, title, count}= props;

    if (name === 'users'){
        return (
            <li>
                <Link to="/admin/users"
                   className="flex items-center p-2 text-base font-normal  rounded-lg ">
                    <svg aria-hidden="true"
                         className="flex-shrink-0 w-6 h-6 text-gray-white "
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                    <span
                        className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-white rounded-full ">{count}</span>
                </Link>
            </li>
        );
    }
    else if(name === 'actors'){
        return (
              <li>
                <Link to= "/admin/actors"
                   className="flex items-center p-2 text-base font-normal  rounded-lg ">
                    <FontAwesomeIcon icon={faMasksTheater}/>
                    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                    <span
                        className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-white rounded-full ">{count}</span>
                </Link>
            </li>
        );
    }
    else if(name === 'films'){
        return (
            <li>
                <Link to ="/admin/films"
                   className="flex items-center p-2 text-base font-normal  rounded-lg ">
                   <FontAwesomeIcon icon={faCameraRetro}/>
                    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                    <span
                        className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-white rounded-full ">{count}</span>
                </Link>
            </li>
        );
    }
    else if(name === 'directors'){
        return (
              <li>
                <Link to ="/admin/directors"
                   className="flex items-center p-2 text-base font-normal  rounded-lg ">
                    <FontAwesomeIcon icon={faVideo}/>
                    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                    <span
                        className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-white rounded-full ">{count}</span>
                </Link>
            </li>
        );
    }

    else if(name === 'display_home_page'){
        return (
              <li>
                <Link to="/admin/home_elements"
                   className="flex items-center p-2 text-base font-normal  rounded-lg ">
                    <FontAwesomeIcon icon={faHouse}/>
                    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                </Link>
            </li>
        );
    }

}