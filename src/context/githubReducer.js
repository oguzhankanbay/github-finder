

const GithubReducer =(state,action)=>{
    switch (action.type) {
        case 'SEARCH_USERS':
            return{
                ...state,
                users:action.payload,
                loading:false
            }

            case 'SET_LOADING':
                return{
                  ...state,
                  loading:true 
                }
         case 'CLEAR_ALL':
                return{
                    ...state,
                      users:[],
                      loading:false
                    }
        case 'GET_USER':
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        case 'GET_USER_REPO':
            return{
                ...state,
                repos:action.payload,
                loading:false
            }
        
     
        default:
            return state;
    }
    }
    export default GithubReducer