import axios from "axios";
import { useState, useEffect ,useRef} from "react";
import {Link ,useParams } from "react-router-dom";

function Detailspage() {
    const { id } = useParams();
    const [singleobj, setsingleobj] = useState({})
    const singledatafetch = useRef(() => {
        axios.get(`http://localhost:7000/singleviewdata/${id}`).then((res) => {
            console.log(res.data);
            setsingleobj(res.data)
        })
    }).current;
    useEffect(() => {
        singledatafetch();
    }, [singledatafetch])


    return (
        <div className="container page border shadow   pb-3 pt-3 mb-5 bg-light">
            <div className="row border-bottom mb-5 ">
                <div className="col-6 text-center">
                    <h2>User Details Page</h2>
                </div>
                <div className="col-6 text-end">
                    <Link to="/dashboard" className="btn btn-dark btn-sm ">Back</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img src={singleobj.picimg} alt=" " height="385px" width="630px" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>id:   {singleobj._id}</h1>
                    <h1>fullname:   {singleobj.fullname} </h1>
                    <h1>email:   {singleobj.email}</h1>
                    <h1>phone:  <span className="text-primary" > {singleobj.phone}</span></h1>
                    <h1>gender:   {singleobj.gender}</h1>
                    <h1>city:     {singleobj.city}</h1>
                    <h1>password:  {singleobj.password}</h1>
                </div>
            </div>
        </div>
    )
}

export default Detailspage;