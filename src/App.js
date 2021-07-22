import React, { useState, useRef } from 'react';
import "./App.css";
import axios from 'axios';



function App() {
  const CreateCampRef = useRef()
  const DeleteCampRef = useRef()
  const UpdateCampAgesRef = useRef()
  const UpdateCampPriceRef = useRef()


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [min_age, setMinAge] = useState(0)
  const [max_age, setMaxAge] = useState(0)
  const [price, setPrice] = useState(0)
  const [CampID, setCampID] = useState(0)
  const [new_price, setnew_price] = useState(0)
  const [new_MIN_AGE, setnew_MIN_AGE] = useState(0)
  const [new_MAX_AGE, setnew_MAX_AGE] = useState(0)
  const [CampList, setCampList] = useState([])
  

  const people = [
    { name: 'chris', age: '23', country: 'brazil', position: 'CEO' },
    { name: 'Juan', age: '45', country: 'mexico', position: 'dev' },
    { name: 'joe', age: '45', country: 'mexico', position: 'dev' }
  ];

  





  const AddCamp = () => {
    axios.post("http://localhost:5000/add_camp",
      { name: name, description: description, MIN_AGE: min_age, MAX_AGE: max_age, price_per_week: price })
      .then(() => { window.alert("Camp Added Successfully") })
  };


  const UpdateCampPrice = () => {
    axios.put("http://localhost:5000/update_camp_price",
      { CampID: CampID, new_price: new_price})
      .then(() => { console.log("success") })
  };

  const UpdateCampAges = () => {
    axios.put("http://localhost:5000/update_camp_ages",
      { CampID: CampID, new_MIN_AGE: new_MIN_AGE, new_MAX_AGE: new_MAX_AGE})
      .then(() => { console.log("success") })
  };

  const ShowCamps = () => {
    axios.get("http://localhost:5000/show_camps",)
      .then((response) => { 
        console.log(response);
        response.data.forEach((x, i) => console.log("item: "+ x));
      })
  };




  const DeleteCamp = () => {
    axios.delete('http://localhost:5000/delete_camp', {
      headers: {mode: 'no-cors'},
      data: {CampID: CampID}})
      .then(() => { console.log("success") })
  };


  function handleCreateCamp(e) {
    const name = CreateCampRef.current.value
    console.log(name)
    CreateCampRef.current.value = null
  }



  function handleDeleteCamp(e) {
    const name = DeleteCampRef.current.value
    console.log(name)
    DeleteCampRef.current.value = null
  }


  function handleUpdateCampAges(e) {
    const name = UpdateCampAgesRef.current.value
    console.log(name)
    UpdateCampAgesRef.current.value = null
  }

  function handleUpdateCampPrice(e) {
    const name = UpdateCampPriceRef.current.value
    console.log(name)
    UpdateCampPriceRef.current.value = null
  }


  return (
    <div className="App">
      <h1> <center>Admin Dashboard</center> </h1>
      
      <div className="form">
      <h2> Create a Camp</h2>
        <label> Camp Name </label>
        <input ref={CreateCampRef} type="text" name="CampName"
          onChange={(event) => { setName(event.target.value) }} />
        <label> Camp Description </label>
        <input ref={CreateCampRef} type="text" name="CampDescription"
          onChange={(event) => { setDescription(event.target.value) }} />
        <label> Camp Minimum Age </label>
        <input ref={CreateCampRef} type="number" name="CampMIN_AGE"
          onChange={(event) => { setMinAge(event.target.value) }} />
        <label> Camp Maximum Age </label>
        <input ref={CreateCampRef} type="number" name="CampMAX_AGE"
          onChange={(event) => { setMaxAge(event.target.value) }} />
        <label> Camp Price Per Week </label>
        <input ref={CreateCampRef} type="number" name="CampPrice"
          onChange={(event) => { setPrice(event.target.value) }} />

        <button onClick={AddCamp}> Add Camp </button>
      </div>
      <div className="Delete">
      <h2>Delete Camp Price from ID</h2>
        <label> Camp ID </label>
        <input ref={DeleteCampRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <button onClick={DeleteCamp}> Delete Camp </button>

      </div>
      <div className="UpdatePrice">
        <h2>Update Camp Price from ID</h2>
        <label> Camp ID </label>
        <input ref={UpdateCampPriceRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <label> New Price </label>
        <input ref={UpdateCampPriceRef} type="number" name="NewPrice"
          onChange={(event) => { setnew_price(event.target.value) }} />
        <button onClick={UpdateCampPrice}> Update Camp Price </button>
  

        
        <div className = "UpdateAges">
        <h2>Update Camp Ages from ID</h2>
        <label> Camp ID </label>
        <input ref={UpdateCampAgesRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <label> New Minimum Age </label>
        <input ref={UpdateCampAgesRef} type="number" name="NewMIN"
          onChange={(event) => { setnew_MIN_AGE(event.target.value) }} />
        <label> New Maximum Age </label>
        <input ref={UpdateCampAgesRef} type="number" name="NewMAX"
          onChange={(event) => { setnew_MAX_AGE(event.target.value) }} />
        <button onClick={UpdateCampAges}> Update Camp Ages </button> 
        </div>


        <div className = "ShowCamps">
        <button onClick={ShowCamps}> Show All Camps  </button>
        <div>
        {people.map((person) => {
    return (
        <div className = "employee">
          <h3>Name: {person.name}</h3>
          <h3>Age: {person.age}</h3>
          <h3>Country: {person.country}</h3>
          <h3>Position: {person.position}</h3>
        </div>
  )})}
</div>
        </div>
    </div>
    </div>
      


  );
}

export default App;
