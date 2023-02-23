import {AdminSidebar} from "../../components/Sidebar/AdminSidebar";
import {Search} from "../../components/forms/search/Search";
import {Link} from "react-router-dom";
import { FilmsTable } from "../../components/table/admin/Films";
import { useState } from "react";


export const AdminFilms =()=>{
    const [search,setSearch] = useState();

    const handleSearch = (e)=>{
        e.preventDefault();
        console.log(search);
    }

    const handleDelete = ()=>{
        console.log("deleted");
    }

    const handleUpdate = ()=>{
        console.log("updated");
    }

    return (    
        <div className="flex space-x-3 items-start py-12">
            <AdminSidebar/>
            <section className="py-6 px-20 w-full space-y-3 flex flex-col max-w-screen-desktop">
                <Search placeholder = "chercher par le nom, le prenom de l'acteur"
                        handleSubmit={handleSearch}
                        setSearch={setSearch}
                        search={search}
                />

                <Link to="/admin/film/add" className="text-white bg-red-600 p-3 rounded-xl self-start">+ Ajouter un nouveau directeur</Link>
                <FilmsTable handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </section>
        </div>
    );
}


