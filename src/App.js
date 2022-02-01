import React, { useState } from "react";

import logo from './logo.svg';
import './App.css';
import data from "./data.json";



const App = () => {
   const[value,setValue]= useState("")
   const [contacts, setContacts] = useState(data)
   const [searchTerm,setSearchTerm] = useState("");
   const [order, setOrder] = useState("ASC");
   const [inputText,setInputText]= useState("") 
   const [state, setstate] = useState(true)
      /* sort */
        // const [addFormData,setAddFormData]=useState({
        //    name:'',
        //    age:'',
        //    salary:'',
        // })
      //sort
    const sorting = (col) => {
      if (order === "ASC") {
        const sorted = [...contacts].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setContacts(sorted);
        setOrder("DSC");

      }

      if (order === "DSC") {
        const sorted = [...contacts].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setContacts(sorted);
        setOrder("ASC");

      }


     

  }


   //try for 
   const tod= (col) => {
    if (order === "ASC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setContacts(sorted);
      setOrder("DSC");

    }

    if (order === "DSC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setContacts(sorted);
      setOrder("ASC");

    }}
    //try

  // temp

  //     const handleAddFormChange = (event) => {
  //     event.preventDefault();

  //     const fieldName = event.target.getAttribute("name");
  //     const fieldValue = event.target.value;

  //     const newFormData = { ...addFormData };
  //     newFormData[fieldName] = fieldValue;

  //     setAddFormData(newFormData);

  //   };

  //   const handleAddFormSubmit =(event) => {
  //   event.preventDefult();

  //   const newContact = { 
  //     // id : nanoid(),
  //     name : addFormData.name,
  //     age : addFormData.age,
  //     salary : addFormData.salary
  //   };

  //   const newContacts =[...contacts,newContact];
  //     setContacts(newContacts);
  //  };

  //  temp
  const onDeleteRecord = (records) => {
    setContacts(pre => {
      return pre.filter(contacts=> contacts.id !== records.id)
    })
  }

  // drp dwn
  function addElement() {
    console.log(value,"work");
    const huh = contacts[value].address = inputText;
    setstate(!state)
    // setContacts(huh)
    // setSortDown(!sortDown);
}
  

  return (
    <div className="App-container">
      <input type="text" id="search" placeholder="search..." onChange={(event) => { setSearchTerm(event.target.value);}}/>
      <p id="note">for assending descending click on name ,age or salary</p>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("name")}>Name </th>
            <th onClick={() => tod("age")}>age</th>
            <th onClick={() => tod("salary")}>salary</th>
            <th> address</th>
            <th>  </th>
          </tr>
        </thead>
        <tbody> 

          {contacts.filter((val)=>{
            if (searchTerm == "" ){
              return val
            } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            } else if (val.age.toString().includes(searchTerm.toString())){
              return val
            }
            else if (val.salary.toString().includes(searchTerm.toString())){
              return val
            }
          }).map((contact) =>
            <tr>
              <td>{contact.name}</td>
              <td>{contact.age} </td>
              <td>{contact.salary}</td>
              <td>{contact.address}</td>
              <td ><button id="delet" onClick={() => onDeleteRecord(contact)}>detete</button></td>

            </tr>
          )}

        </tbody>

      </table>

      {/* <h2>add a new data</h2> */}


      {/* in form onSubmit={handleAddFormSubmit} */}
      {/* in input onChange={handleAddFormChange} */}
      {/* form for add */}
      {/* <form action="" >
        <input type="text" name="name" placeholder="enter a name.." />
        <input type="text" name="age" placeholder="enter a age.." />
        <input type="text" name="salary" placeholder="enter a salary.." />
        <button type="submit"> Add</button>

      </form> */}

      <select id="select" onChange={ (e) => {setValue(e.target.value) }}>

        <option id="r">----select Name----</option>
        {
          contacts.map((contact) => (<option value={contact.value}>   {contact.name}</option>)
          )}

      </select>

      <input type="text" onChange={ (e) => {setInputText(e.target.value) }}/>
      <button onClick={() => addElement() } >update</button>


    </div>



  );
};

export default App;
