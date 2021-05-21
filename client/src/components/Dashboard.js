//IMPORTING PACKAGES
import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

//FUNCTIONAL COMPONENT
const Dashboard = () => {
  //SETTING UP THE STATE
  const [inputValue , setInputValue] = useState("");
  const [searchValue , setSearchValue] = useState("");
  const [result , setResult] = useState("");


  //SUBMIT FUNCTION
  const handleSubmit = (e) =>{
    //PREVENTING THE PAGE FROM RELOAD WHEN THE SUBMIT IS DONE
    e.preventDefault();
    //SPLITING THE STRING TO MAKE IT AN ARRAY
    const newArr = inputValue.split(",");
    //SORTING INPUTVALUE IN DESC. ORDER
    newArr.sort(function(a, b){return b - a});
    //SEARCHING THE SEARCH ITEM IN THE INPUTVALUE ARRAY
    const r = newArr.filter(function (num){return (num === searchValue)});
    //SETTING UP RESULT ACCORDING TO THE CONDITIONS
    if(r.length){
      setResult("True");
    }else{
      setResult("False");
    }
    //CONVERTING THE ARRAY INTO A STRING
    const sequence = newArr.toString();
    //SETTING UP THE VALUE FOR POST REQUEST IN THE SERVER
    const input = {
      sequence
    }
    //MAKING THE ADD INPUT VALUE REQUEST
    axios.post('http://localhost:4000/api/inputs', input)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  //LOGOUT FUNCTION
  const logout = (e) =>{
    localStorage.clear();
    return <Redirect to={'/'} />
  }

  return (
    <div className="container justify-content-center mt-3">
      <div className="mx-3 my-3">
      <Link to={'/input'} className="btn btn-info btn-block" style={{width: '25%'}}>
          Show All Inputs
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Khoj the search </h3>
        <input
          type="text"
          className="form-control form-control-lg my-5"
          id="inputValue"
          placeholder="Input Value"
          value={inputValue}
          onChange = {(e) => setInputValue(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-lg my-5"
          id="searchValue"
          placeholder="Search Value"
          maxLength="5"
          value={searchValue}
          onChange = {(e) => setSearchValue(e.target.value)}
        />
        <div>
          <h4>Result: {result}</h4>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3" style={{width: '50%'}}>
          Khoj
        </button>
        
      </form>
      

      <Link onClick={logout} to={'/'} className="btn btn-danger btn-block mt-5" style={{width: '25%'}}>
          Logout
        </Link>

    </div>
  );
}

export default Dashboard;
