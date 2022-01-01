import React ,{ useReducer } from "react"
import GithubContext from "./githubContext"
import GithubReducer from './githubReducer'
import axios from "axios";

const GithubState=(props)=>{

    const initialState ={
        users:[],
        user:{},
        repos:[],
        loading:false,
   
    }

const [state, dispatch]= useReducer(GithubReducer,initialState);


const searchUser=(keyword)=> {
    setLoading();

    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) =>{
          dispatch({
              type:'SEARCH_USERS',
              payload:res.data.items
          })
        
        });
  }
const setLoading =()=>{
    dispatch({type:'SET_LOADING'})
}
const clearAll=()=> {
    dispatch({type:'CLEAR_ALL'})
  }
  const getUser=(kullanici)=>{
    setLoading();
    setTimeout(() => {
        axios.get(`https://api.github.com/users/${kullanici}`)
        .then(res=>{dispatch({type:'GET_USER',payload:res.data})});
    }, 2000);  
  }


  const getUserRepo=(username)=>{
    setLoading();
     setTimeout(() => {
         axios.get(`https://api.github.com/users/${username}/repos`)
         .then(res=>{
             dispatch({type:'GET_USER_REPO', payload:res.data})
         });
     }, 2000);
 }

return <GithubContext.Provider value={
    {
    users:state.users,
    user:state.user,
    repos:state.repos,
    loading:state.loading,
  
    searchUser,
    clearAll,
    getUser,
    getUserRepo
   
    }}>
{props.children}
</GithubContext.Provider>
}

export default GithubState