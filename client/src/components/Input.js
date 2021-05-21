//IMPORTING PACKAGES
import React from "react";

//IMPORTING COMPONENT FILES
import Spinner from "./Spinner";


const Input = ({ inputValues, loading }) => {
  if(loading){
    return <Spinner />
  }else{
    return (
      <tbody>
      {inputValues.map((input,key) => (
        <tr key = {input._id}>
        <th scope="row">{input._id}</th>
        <td>{input.sequence}</td>
        <td>{input.createdAt}</td>
      </tr>
      ))}
    </tbody>
    );
  }
};

export default Input;
