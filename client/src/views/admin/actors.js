
import {AdminSidebar} from "../../components/Sidebar/AdminSidebar";
import {Search} from "../../components/forms/search/Search";
import {useEffect, useState} from "react";
import {ActorsTable} from "../../components/table/admin/Actors";
import {TextFieldMedium} from "../../components/forms/TextField/TextFieldMedium";
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import {TextArea} from "../../components/forms/textarea/TextArea";
import {actorInitialValues, validateActor} from "../../services/constants/admin/constants";
import {Button} from "../../components/buttons/Button";
import {Link} from "react-router-dom";
import { addActors } from "../../utils/server/Api";



export const AdminActors =()=>{
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

                <Link to="/admin/actors/add" className="text-white bg-red-600 p-3 rounded-xl self-start">+ Ajouter un nouveau acteur</Link>
                <ActorsTable handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </section>
        </div>
    );
}
export const ActorsAdd = ()=>{

    const [actorValues, setActorValues] = useState(actorInitialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState("");
    const [imageFile, setImageFile] = useState();

    const submitHandler = (e)=>{
        e.preventDefault();

        if(Object.keys(formErrors).length === 0){

            addActors(actorValues, imageFile).then(response=>response.json()).then(response=>console.log(response))
        }else{
            setIsSubmit(true);
            setMessage("Vous avez des erreurs dans le formulaire")
            console.log("form have errors");
        }
    }

    const handleChange = (e)=>{
        const {name, value, files} = e.target
        setActorValues({...actorValues,[name]:value})
        setImageFile({imageFile: files[0]})
    }

    useEffect(()=>{
        setFormErrors(validateActor(actorValues));
    },[actorValues])

    return (
         <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Ajouter un film
                </h1>
                 {isSubmit &&
                    <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-bold"
                        role="alert">
                        <span className="font-medium">{message}</span>
                    </div>

                }
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col max-w-xl">
                        <div className="flex justify-between flex-wrap">
                            <TextFieldMedium label="Prénom"
                                             type="text"
                                             placeholder="Entrer votre prénom"
                                             name="firstname"
                                             values={actorValues.firstname}
                                             handleChange={handleChange}
                                             formError={formErrors.firstname}
                            />
                            <TextFieldMedium label="Nom"
                                             type="text"
                                             placeholder="Entrer votre nom"
                                             name="lastname"
                                             values={actorValues.lastname}
                                             handleChange={handleChange}
                                             formError={formErrors.lastname}
                            />
                        </div>
                        <TextFieldLarge
                                        label="Date de naissance"
                                        type="date"
                                        placeholder="Entrer la date de naissance"
                                        name="birthdate"
                                        values={actorValues.birthdate}
                                        handleChange={handleChange}
                                        formError={formErrors.birthdate}
                        />
                        <TextArea
                                    label="description"
                                    placeholder="entrer la description de l'acteur"
                                    name="description"
                                    values={actorValues.description}
                                    handleChange={handleChange}
                                    formError={formErrors.description}
                        />
                        <TextFieldLarge
                                    label="Image de l'acteur"
                                    placeholder="Entrer l'image de l'acteur"
                                    name="image"
                                    type="file"
                            /*         values={actorValues.image.} */
                                    handleChange={handleChange}
                        />

                         <Button text="Valider"
                                color="white"
                                type="submit"
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}