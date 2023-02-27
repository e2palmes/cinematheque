import {AdminSidebar} from "../../components/Sidebar/AdminSidebar";

export const Admin =()=>{
    return (
        <div className="flex space-x-3 items-start py-12">
            <AdminSidebar/>
            <section className="py-6 px-20 flex justify-center align-center w-full max-w-screen-desktop">
                <h1>Bienvenue dans la page admin</h1>
            </section>
        </div>
    );
}