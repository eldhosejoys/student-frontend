import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Student from "../models/Student";

function UpdateStudentComponent() {

    let navigate = useNavigate();

    const[student,setStudent] = useState(new Student());

    const {id} = useParams();

    //get the path variable 
    
    useEffect(()=>{
        console.log(id);

        //send request to get a specific student api and fill the form with respective details

    },[]);

    function changeName(event){
        // console.log(event.target.value);  
        let newStudent = Object.assign({},student);
        newStudent.name = event.target.value;  
        setStudent(newStudent);
    }
    
    function changeAddress(event){
        // console.log(event.target.value);
        let newStudent = Object.assign({},student);
        newStudent.address = event.target.value;  
        setStudent(newStudent);
    }
    
    function changeGrade(event){
        // console.log(event.target.value);
        let newStudent = Object.assign({},student);
        newStudent.grade = event.target.value;  
        setStudent(newStudent);
    }
    
    function changeGender(event){
        // console.log(event.target.value);
        let newStudent = Object.assign({},student);
        newStudent.gender = event.target.value;  
        setStudent(newStudent);
    }    

    function editStudent(){
        console.log(student);

        //make the spring boot or any backend edit a student

        navigate("/students");

    }

    return ( 
        <div className="container">
            <h1>Update Student</h1>
            <form>
                <h4>Id</h4>
                <input type="text" placeholder="Enter ID" readOnly/>
                <h4>Name</h4>
                <input type="text" placeholder="Enter Name" onInput={changeName} />
                <h4>Address</h4>
                <input type="text" placeholder="Enter Address" onInput={changeAddress} />
                <h4>Grade</h4>
                <select onChange={changeGrade}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>F</option>
                </select>
                <h4>Gender</h4>
                <input type="radio" name="gender" onChange={changeGender} /> Male &nbsp; 
                <input type="radio" name="gender" onChange={changeGender} /> Female 
                <br/><br/><br/>
                <button type="submit" onClick={editStudent}>Save</button>
            </form>
        </div>
    );
}

export default UpdateStudentComponent;