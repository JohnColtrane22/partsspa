import { LoginData } from "../models/login";
import http from "./http-common";

const create = (data: LoginData) => {
    return http.post<LoginData>("https://localhost:7157/login", data);
    
  };


  const LoginService = {
    
    create,
   
  };
  
  export default LoginService;