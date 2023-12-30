import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Landingpage() {

    const [single, setfun] = useState([]);
    //all db data fetch
    function datafetch() {
        axios.get("http://localhost:7000/dballdata").then((res) => {
            console.log(res.data);
            setfun(res.data)
        })
    }

    useEffect(() => {
        datafetch()
    }, [])


    //delete api heat 
    //this function is called in click button se
    const deleteData = async (id) => {
        await axios.delete(`http://localhost:7000/deletedata/${id}`).then((res) => {
            console.log(res.data);
            datafetch()
        })
    }






    return (

        <div className="container-fluid page">
            <div className="row">
                <div className="col-12 text-end">
                    <h1>TotalData:{single.length}</h1>
                </div>
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center" >
                                <th scope="col">SNo</th>
                                <th scope="col">id</th>
                                <th scope="col">fullname</th>
                                <th scope="col">email</th>
                                <th scope="col">phone</th>
                                <th scope="col">gender</th>
                                <th scope="col">City</th>
                                <th scope="col">pass</th>
                                <th scope="col">profile</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {single.map((dis, i = 1) => {
                                return (
                                    <tr key={dis._id}>
                                        <th scope="row">{++i}</th>
                                        <th scope="row">{dis._id}</th>
                                        <td>{dis.fullname}</td>
                                        <td>{dis.email}</td>
                                        <td>{dis.phone}</td>
                                        <td>{dis.gender}</td>
                                        <td>{dis.city}</td>
                                        <td>{dis.password}</td>
                                        <td><img src={dis.picimg} alt="" height="70px" width="70px" /></td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-primary" to={`userDetails/` + dis._id}>view</Link>
                                            <Link className="btn btn-sm btn-info ms-2" to={`editpage/` + dis._id} >edit</Link>
                                            <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteData(dis._id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Landingpage;