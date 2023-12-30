import { Link } from "react-router-dom"

function Mylogin() {
    return (
        <div className="container shadow page p-5 border regi bg-light ">
            <div className="row">
                <div className="col-12 mt-2 text-center  "><h1>User login page</h1></div>

                <div className="col-md-12 mt-2">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="col-md-12 mt-2">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" />
                </div>

                <div className="col-12 text-center pt-2 ">
                    <button className="btn btn-info">Login</button>
                    <Link className="btn btn-primary ms-2" to="registor">New User Register</Link>
                    <Link className="btn btn-primary ms-2" to="/dashboard">Dashboard</Link>
                </div>

            </div>
        </div>

    )
}

export default Mylogin