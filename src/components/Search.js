import React,{useContext, useState} from 'react';
import AlertContext from '../Alert/alertContext';

import GithubContext from '../context/githubContext';

const Search =()=> {
    
    const{clearAll,searchUser,users} =useContext(GithubContext)
    const{setAlert} =useContext(AlertContext)

    const[keyword,setKeyword]=useState('');
  
  
    const onChange=(e)=>{
        setKeyword(e.target.value);
    }
    const onSubmit=(e)=>{
         e.preventDefault();
         if (keyword==='') {
            setAlert('Lütfen anahtar kelimeyi giriniz.','warning');
             
         }
         else{ 
        searchUser(keyword)
        setKeyword('');
            }
        
          }
 
        return (<div className="container my-3">
            <form onSubmit={onSubmit}>
                
                <div className="input-group  m-1">
                    <input type="text" value={keyword} onChange={onChange} className='form-control'/>
                    <div className="input-group-append">
                        <button type="submit" className='btn btn-outline-secondary'>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                </form>
                {
                        users.length>0 
                        &&<button type="submit" onClick={clearAll} className='btn btn-danger d-block mt-5'> Arama Sonucunu Temizle</button>
                                                

                }
                </div>
            
        );
    }


export default Search;
