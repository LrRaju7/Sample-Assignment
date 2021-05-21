//IMPORTING PACKAGES
import React , {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


//FUNCTIONAL COMPONENT
const Login = () => {
  //SETTING UP THE STATE
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isAuth , setIsAuth] = useState(false);

  //SUBMIT FUNCTION
  const handleSubmit = (e) =>{
    //PREVENTING THE PAGE FROM RELOAD WHEN THE SUBMIT IS DONE
    e.preventDefault();
    
    //SETTING UP THE VALUE FOR POST REQUEST IN THE SERVER
    const data = {
      email,
      password
    }
    //MAKING THE ADD INPUT VALUE REQUEST
    axios.post('http://localhost:4000/api/auth', data)
    .then(res => {
      console.log(res.data.token);
      setEmail('');
      setPassword('');
      setIsAuth(true);
      localStorage.setItem('token', res.data.token);

    })
    .catch(err => console.log(err));
  }

  //CHECKING IF THE USER IS AUTHENTICATED
  if(isAuth){
    return <Redirect to={'/dashboard'}/>
  }
  
  return (
    <div className="container justify-content-center">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="email"
          className="form-control form-control-lg my-5"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control form-control-lg my-5"
          id="exampleInputPassword"
          placeholder="Password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
        />
        <p className='small-text'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
