import React, {useState} from "react";
import {FormNavbar} from "../../components/navbar/FormNavbar";
import {Contenu, Khphotos, recompense} from "./test/Data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {Commentaires} from "../Film/test/Data";



export const BioActor = () => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(Commentaires);
    const submitHandler = (e)=>{
        e.preventDefault();

        Commentaires.push(
            {
                name:"this test user",
                image:"/assets/images/avatar1.png",
                commentaire: comment
            }
        );
        setComment("");
        console.log(Commentaires);
        setComments(Commentaires);
    }

    return(
        <div className="mx-5 py-12 my-0 flex flex-col items-center space-y-5">
            {/*Navbar*/}
            <FormNavbar/>

            <section className="py-6 px-20 w-10/12 max-w-screen-desktop leading-3">
                <h1 className="mb-3 text-2xl font-black">{Contenu.name}</h1>
                <div className="flex space-x-9">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-40">
                            <img className="object-fill w-48 h-52 rounded-lg" src="/assets/images/KitHarington.jpeg" alt="KH"/>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-2">

                        <div>
                            <div className="flex space-x-6">
                                <div className="text-red-600 space-y-4">
                                    <p>Etat civil:</p>
                                    <p>Nationnalité:</p>
                                    <p>Naisance:</p>
                                    <p>Age:</p>

                                </div>
                                <div className="space-y-4">
                                    <p>{Contenu.Country}</p>
                                    <p>{Contenu.Civil_status}</p>
                                    <p>{Contenu.Birthday}</p>
                                    <p>{Contenu.Age}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/*    biographie section*/}
            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Biographie</h1>
                <div>
                    <p>{Contenu.Biographie}</p>

                </div>

            </section>

        {/*    photo section*/}
            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Photos</h1>
                {/*map les pic dans un tableau*/}
                {/*Bug to notice. cannot show all pic mapped. only the first one is shown*/}
                <div className="flex flex-wrap -mr-12">
                    {Khphotos.map(({photo})=>{
                        return(
                            <div className="mb-4 ml-10">
                                <img className="object-fill w-32 h-36 rounded-md" src={photo} alt="KH photos"/>
                            </div>

                        );
                    })}


                </div>


            </section>

            {/*Recompence section*/}
            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Récompenses</h1>
                <div className="flex flex-col space-y-2 items-centers">

                    <div>
                        {/*left infos*/}
                        <div className="flex space-x-12 items-center">
                            <div className=" space-y-8">
                                <p>{recompense.infosLeft1}</p>
                                <p>{recompense.infosLeft2}</p>
                                <p>{recompense.infosLeft3}</p>

                            </div>
                            {/*right infos*/}
                            <div className="space-y-8">
                                <p>{recompense.infosRight1}</p>
                                <p>{recompense.infosRight2}</p>
                                <p>{recompense.infosRight3}</p>
                            </div>

                        </div>
                    </div>
                </div>



            </section>

            {/*Commentaires sections*/}
            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Commentaires</h1>
                {
                    comments.map(({name,image,commentaire})=>{
                        return (
                            <div className="flex mb-4 space-x-2">
                                <div>
                                    <img className="object-fill w-10 h-10 rounded-full" src={image} alt="user"/>
                                </div>

                                <div className="flex flex-col">
                                    <p>{name}</p>
                                    <p>{commentaire}</p>

                                </div>
                            </div>
                        );
                    })
                }

                <form className="flex mx-10" onSubmit={submitHandler}>
                        <textarea className="appearance-none bg-transparent border-b-2 border-white w-full max-w-2xl text-slate-100 mr-2 py-1 px-2 focus:outline-none"
                                  placeholder="écrire un commentaire"
                                  rows="2"
                                  value={comment}
                                  onChange={(e)=>setComment(e.target.value)}
                        ></textarea>
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>


            </section>


        </div>
    );

}