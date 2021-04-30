import {Redirect, Route} from "react-router-dom"

export const PrivateRoute = ({component: Component, ...props}) => {
    return <Route {...props} render = {()=>{
       if(localStorage.getItem("token") === null) {
          return <Redirect to="/login"/>
       }
       else {
        return <Component {...props}/>
       }
        
    } }/>
}