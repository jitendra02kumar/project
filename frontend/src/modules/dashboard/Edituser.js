import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";


function Edituser() {
    const { id } = useParams();           //auto fiil ke sath ayega
    const [sdata, supdate] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        city: "",
        picimg: ""
    });

    // console.log(id);

    //state ki value get karna   //
    const getstatevalue = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target
        supdate((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    //
    //auto fill update form 
    const singledatafetch = useRef(() => {
        axios.get(`http://localhost:7000/singleviewdata/${id}`).then((res) => {
            console.log(res.data);
            supdate(res.data)
        })
    }).current;
    useEffect(() => {
        singledatafetch();
    }, [singledatafetch])



    const editupdate = async () => {
        const { fullname, email, phone, gender, city, password, picimg } = sdata;
        const res = await fetch(`http://localhost:7000/updatedata/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, email, phone, gender, city, password, picimg })
        })
        window.location.href = "/dashboard";
        const data1 = await res.json();
        console.log(data1);
    }


    return (
        <div className="container shadow page p-5 border regi bg-light">
            <div className="row">
                <div className="col-12 mt-2 text-center  "><h1>User Edit Forms Details</h1></div>
                <div className="col-md-6 mt-2">
                    <label className="form-label">Full Name:</label>
                    <input type="text" className="form-control" name="fullname" value={sdata.fullname} onChange={getstatevalue} />
                </div>
                <div className="col-md-6 mt-2">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" value={sdata.email} onChange={getstatevalue} />
                </div>
                <div className="col-md-6 mt-2">
                    <label className="form-label">Phone No:</label>
                    <input type="text" className="form-control" name="phone" value={sdata.phone} onChange={getstatevalue} />
                </div>
                <div className="col-md-6 mt-2">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" name="password" value={sdata.password} onChange={getstatevalue} />
                </div>
                <div className="col-md-6 mt-2 mb-4">
                    <label className="form-label">Gender:</label>
                    <select className="form-control" name="gender" value={sdata.gender} onChange={getstatevalue} >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-md-6 mt-2">
                    <label className="form-label">City:</label>
                    <input type="text" className="form-control" name="city" value={sdata.city} onChange={getstatevalue} />
                </div>
                <div className="col-md-12 mt-2">
                    <label className="form-label">Image URL paste:</label>
                    <input type="text" className="form-control" name="picimg" value={sdata.picimg} onChange={getstatevalue} />
                </div>
                <div className="col-12 text-center pt-2 ">
                    <button className="btn btn-primary" type="button" onClick={editupdate}>Update</button>
                    <button className="btn btn-danger ms-2">Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Edituser;



