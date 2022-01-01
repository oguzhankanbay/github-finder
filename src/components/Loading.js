import {React,Fragment} from 'react'
import loading from './loading.gif'
function Loading() {
    return (
        <Fragment>
            <img src={loading} alt="loading..." 
             style={{
                 width:'8vw',
                
                 top:"50%",
                 left:"45%",
                 right:'50%',
                 position:"absolute",
                 
                 
                 }}/>


        </Fragment>
    )
}

export default Loading
