import React, {useState} from "react";
import {FormNavbar} from "../../components/navbar/FormNavbar";
import { staticdata, KhPhotos } from "./test/Data";
import img from "../../assets/Images/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { Commentaires } from "../Film/test/Data";
import Footer from "../../components/footer/Footer";





export const BioRealisateur= () => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(Commentaires);
    const submitHandler = (e) => {
        e.preventDefault();

        Commentaires.push(
            {
                name: "this test user",
                image: "/assets/images/avatar1.png",
                commentaire: comment
            }
        );
        setComment("");
        console.log(Commentaires);
        setComments(Commentaires);
    }

   

    return(
        <div className="mx-5 py-12 my-0 flex flex-col items-center space-y-5">
            <FormNavbar></FormNavbar>

            <section className="py-6 px-20 w-10/12 max-w-screen-desktop leading-3">

                <h1 className="mb-3 text-2xl font-black">{staticdata.name}</h1>

                    <div className="flex space-x-9">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-40">
                                <img className="object-fill w-48 h-56 rounded-lg" src={img}  />
                            </div>

                        </div>

                        <div className="flex space-x-7">
                            <div className="text-red-600 space-y-5">
                                <p>Etat civil:</p>
                                <p>Nationnalité:</p>
                                <p>Naisance:</p>
                                <p>Age:</p>

                            </div>
                            <div className="space-y-5">
                                <p>{staticdata.Country}</p>
                                <p>{staticdata.Civil_status}</p>
                                <p>{staticdata.Birthday}</p>
                                <p>{staticdata.Age}</p>
                            </div>

                        </div>
                    </div>

            </section>

            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">

                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Filmographie</h1>
                
                <div className=" flex space-x-60">
                    <div> <strong>année</strong> <br/> <br/>
                        <p>2017</p> <br/>
                        <p>2015</p><br/>
                        <p>2013</p><br/>
                        <p>2012</p><br/>
                        <p>2009</p><br/>
                    </div>
                    <div> <strong>titre</strong><br/> <br/>
                        <p>justice leaga</p> <br/>
                        <p>avengers l'aire ultron</p><br/>
                        <p>beaucoup de bruits </p><br/>
                        <p>Everything Everytging</p><br/>
                        <p>Perfect Date</p><br/>
                    </div>

                    <div> <strong>type</strong> <br/> <br/>
                        <p>Science fiction</p> <br/>
                        <p>action</p><br/>
                        <p>drame </p><br/>
                        <p>romance</p><br/>
                        <p>romance</p><br/>
                    </div>

                    <div>
                        <strong>note</strong>
                    </div>

                </div>
            </section>

            <section className="py-6 px-20 w-10/12 max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black text-red-600 font-bold">Commentaires</h1>
                {
                    comments.map(({ name, image, commentaire }) => {
                        return (
                            <div className="flex mb-4 space-x-2">
                                <div>
                                    <img className="object-fill w-10 h-10 rounded-full" src={image} alt="user" />
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
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>


            </section>

            <footer>
                <Footer/>
            </footer>


        </div>
    );

}