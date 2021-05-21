//IMPORTING PACKAGES
import React , {useState} from "react";
import { Link} from 'react-router-dom';
import axios from 'axios';

//FUNCTIONAL COMPONENT
const Signup = () => {
  //SETTING UP THE STATE
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [location , setLocation] = useState("");
  const [phone , setPhone] = useState("");


  //SUBMIT FUNCTION
  const handleSubmit = (e) =>{
    //PREVENTING THE PAGE FROM RELOAD WHEN THE SUBMIT IS DONE
    e.preventDefault();
    
    //SETTING UP THE VALUE FOR POST REQUEST IN THE SERVER
    const data = {
      name,
      email,
      password,
      location,
      phone
    }
    //MAKING THE ADD INPUT VALUE REQUEST
    axios.post('http://localhost:4000/api/users/', data)
    .then(res => {
      console.log(res.data);
      setName('');
      setEmail('');
      setPassword('');
      setLocation('');
      setPhone('');

    })
    .catch(err => console.log(err));
  }
  return (
    <div className="container justify-content-center">
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input
          type="text"
          className="form-control form-control-lg my-5"
          id="exampleInputName"
          placeholder="Name"
          value={name}
          onChange = {(e) => setName(e.target.value)}
        />
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
        <input
          type="text"
          className="form-control form-control-lg my-5"
          id="exampleInputLocation"
          placeholder="Locaton"
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-lg my-5"
          id="exampleInputPhone"
          placeholder="Phone"
          value={phone}
          onChange = {(e) => setPhone(e.target.value)}
        />
        <p className='small-text'>
            Already Registered? <Link to='/'>Login</Link>
          </p>
        <button type="submit" className="btn btn-primary btn-block">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
