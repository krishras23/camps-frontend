import React, {useState, useRef} from 'react';
import "./App.css";
import { PostRequest } from './PostRequest';
import { GetRequest } from './GetRequest';


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


  function handleCreateCamp(e){
    const name = CreateCampRef.current.value
    console.log(name)
    CreateCampRef.current.value = null
  }


  function handleDeleteCamp(e){
    const name = DeleteCampRef.current.value
    console.log(name)
    DeleteCampRef.current.value = null
  }


  function handleUpdateCampAges(e){
    const name = UpdateCampAgesRef.current.value
    console.log(name)
    UpdateCampAgesRef.current.value = null
  }

  function handleUpdateCampPrice(e){
    const name = UpdateCampPriceRef.current.value
    console.log(name)
    UpdateCampPriceRef.current.value = null
  }


  return (
    <div className="App">
      <h1> Admin Dashboard </h1>
      
        <div className="form">
          <label> Camp Name </label>
          <input ref={CreateCampRef} type = "text" name = "CampName"
          onChange={(event) =>{setName(event.target.value)}}/>
          <label> Camp Description </label>
          <input ref={CreateCampRef} type = "text" name = "CampDescription" 
          onChange={(event) =>{setDescription(event.target.value)}}/>
          <label> Camp Minimum Age </label>
          <input ref={CreateCampRef} type = "number" name = "CampMIN_AGE" 
          onChange={(event) =>{setMinAge(event.target.value)}}/>
          <label> Camp Maximum Age </label>
          <input ref={CreateCampRef} type = "number" name = "CampMAX_AGE" 
          onChange={(event) =>{setMaxAge(event.target.value)}}/>
          <label> Camp Price Per Week </label>
          <input ref={CreateCampRef} type = "number" name = "CampPrice"
          onChange={(event) =>{setPrice(event.target.value)}}/>
          <button onClick = {handleCreateCamp}> Create Camp </button>
          <h1>react</h1>
          <PostRequest />


        </div>

    </div>


  );
}

export default App;
