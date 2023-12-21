import { useSelector } from "react-redux"
import DoctorLogin2 from "./Components/login"

// eslint-disable-next-line react/prop-types
const LoginRoute = ({element}) => {
const log=useSelector(state=>state.loginReducer)
    if(log.isLogged){
        return element
    }
    else{
        return (  
           <DoctorLogin2/>
          )
    }
 
}

export default LoginRoute