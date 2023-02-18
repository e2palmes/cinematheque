import {AdminSidebar} from "../../components/Sidebar/AdminSidebar";
import {Search} from "../../components/forms/search/Search";
import {useState} from "react";
import {UsersTable} from "../../components/table/admin/Users";


export const AdminUsers =()=>{
    const [search,setSearch] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(search)
    }

    const handleDelete = ()=>{
        console.log("deleted");
    }
    return (
        <div className="flex space-x-3 items-start py-12">
            <AdminSidebar/>
            <section className="py-6 px-20 w-full space-y-3 flex flex-col max-w-screen-desktop">
                <Search placeholder = "chercher par le nom, le prenom, l'identifiant de l'utilisateur"
                        handleSubmit={handleSubmit}
                        setSearch={setSearch}
                        search={search}
                />
                <UsersTable handleDelete={handleDelete}/>
            </section>
        </div>
    );
}