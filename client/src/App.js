import './assets/App.css';
import Register from "./views/registration/Register";
import Login from "./views/connexion/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "./views/LandingPage/LandingPage";
import { Accueil } from './views/Home/accueil';
import {Film} from "./views/Film/Film";
import {Admin} from "./views/admin/admin";
import {AdminUsers} from "./views/admin/users";
import {ActorsAdd, AdminActors} from "./views/admin/actors";
import {BioActor} from "./views/biographie/BioActor";
import {BioRealisateur} from "./views/biographie/BioRealisateur";



function App() {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Accueil" element={<Accueil/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Accueil/>}/>
                <Route path="/film" element={<Film/>}/>
                <Route path="BioActor" element={<BioActor/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/users" element={<AdminUsers/>}/>
                <Route path="/admin/actors" element={<AdminActors/>}/>
                <Route path="/admin/actors/add" element={<ActorsAdd/>}/>
                <Route path="/admin/films" element={<Admin/>}/>
                <Route path="/admin/directors" element={<Admin/>}/>
                <Route path="/admin/home_elements" element={<Admin/>}/>
                <Route path="*" element={<h1>Error 404 page not found</h1>}/>
                <Route path="BioRealisateur" element={<BioRealisateur/>}/>

            </Routes>
        </Router>
    );
}

export default App;