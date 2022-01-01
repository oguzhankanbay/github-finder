import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/githubContext';
import Loading from './Loading';
import Repos from './Repos'
const UserDetails=({match})=> {
const{getUser,user,loading,getUserRepo}=useContext(GithubContext)
    useEffect(()=>{
      getUser(match.params.login);
      getUserRepo(match.params.login);},[])

 const{login,avatar_url,location,bio,html_url,following,followers}=user;
 
        if (loading) {
            return <Loading/>
        }
        else{
        return (
            <div>
{               <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} className='img-fluid' alt="" />
                        <div className="card-body">
                            <div className="card-text">   <i class="fas fa-user"></i> {login}</div>
                         <div className="card-text"><i class="fas fa-location-arrow"></i> {location}</div>
                         <div className="card-text mt-4">

                             {bio && <>
                             <i class="fas fa-book-user"></i> {bio}
                             </>}
                             
                             </div>
                        <a className='btn btn-sm mt-3 btn-primary w-100' href={html_url}>Go to Github Page</a>
                        </div>
                        </div>
                    
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                       <div className="badge  bg-danger m-1 ">Takip : {followers}</div>
                       <div className="badge bg-warning m-1">Takipçi : {following}</div>
                       
                     </div>  
                      <ul className="list-group list-group-flush">
                       <Repos/>
                      </ul>
                    </div>
                </div>
</div> </div>
}            </div>
        )
    }
}

export default UserDetails
