import {actorsData} from "./constants";

export const ActorsTable = ({handleDelete,handleUpdate})=>{
    return (
        <div>
            <table className="table-auto w-full text-left">
                <thead className="uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">Id</th>
                        <th scope="col" className="px-6 py-3">Nom</th>
                        <th scope="col" className="px-6 py-3">Prenom</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      actorsData.map((data)=>{
                          const {id,lastname,firstname} = data;
                          return (
                              <tr>
                                <td className="px-6 py-4">{id}</td>
                                <td className="px-6 py-4">{lastname}</td>
                                <td className="px-6 py-4">{firstname}</td>
                                <td className="px-6 py-4">
                                    <button className="text-sky-500 mr-3" onClick={handleUpdate}>Editer</button>
                                    <button className="text-red-600" onClick={handleDelete}>Supprimer</button>
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