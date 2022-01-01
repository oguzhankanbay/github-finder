import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    const { login, avatar_url } = this.props.user;
    return (
      
        <div className="col-md-3 col-sm-6 col-lg-2">
          <div className="card mt-2">
            <img src={avatar_url} alt="" className="card-img " />
          </div>
          <p className="card-title m-1 "> <div className="btn btn-warning btn-sm ">{login}</div>  </p>
          <Link to={`/user/${login}`} className="btn btn-primary btn-sm m-1">Profile git</Link>
        </div>
      
    );
  }
}

export default User;
