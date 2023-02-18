import {useState} from "react";
import {useSelector} from "react-redux";


export const UsersTable = ({handleDelete})=>{
    const {allUsers} = useSelector((state)=> state.users)
    return (
        <div>
            <table className="table-auto w-full text-left">
                <thead className="uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">Id</th>
                        <th scope="col" className="px-6 py-3">Nom</th>
                        <th scope="col" className="px-6 py-3">Prenom</th>
                        <th scope="col" className="px-6 py-3">Identifiant</th>
                        <th scope="col" className="px-6 py-3">E-mail</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers &&
                      allUsers.map((data)=>{
                          const {id,lastname,firstname,username,email} = data;
                          return (
                              <tr key={id}>
                                <td className="px-6 py-4">{id}</td>
                                <td className="px-6 py-4">{lastname}</td>
                                <td className="px-6 py-4">{firstname}</td>
                                <td className="px-6 py-4">{username}</td>
                                <td className="px-6 py-4">{email}</td>
                                <td className="px-6 py-4">
                                    <button className="text-red-600" onClick={handleDelete}>supprimer</button>
                                </td>
                              </tr>
                          );
                      })
                    }
                </tbody>
            </table>
        </div>
    );
}