import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
// import data from "./components/data";
import BirthdayToday from "./components/BirthdayToday";
function App() {
  const [people, setPeople] = useState([
    {
        id:1,
        path:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name:"Naseer Ahmad",
        birthday:"04/09/1997",
    },
    {
        id:2,
        path:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name:"Sobia Zulfiqar",
        birthday:"31/07/1999",
    },
    {
        id:3,
        path:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name:"Alina Sheikh",
        birthday:"22/08/1998",
    },
    {
        id:4,
        path:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name:"Alishba Tarick",
        birthday:"15/01/1998",
    },
]);

  const handleClick=()=>{
    console.log(people);
    setPeople([]);
  }
  const removePerson=(id)=>{
    const newPeople=people.filter((person)=>{
      return person.id!==id;
    });
    setPeople(newPeople);
  }
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12">
        <h1>{people.length} Birthdays Today</h1>
        </div>
      </div>
      <div className="row">
            <BirthdayToday people={people} removePerson={removePerson}/>
      </div>
      <button className="btn btn-success button-clear col-6" onClick={handleClick}>Clear</button>
    </div>
  );
}

export default App;
