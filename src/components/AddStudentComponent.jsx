import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from "../models/Student";

function AddStudentComponent() {

    let navigate = useNavigate();

    const[student,setStudent] = useState(new Student());

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

    function addStudent(){
        console.log(student);

        //make the spring boot or any backend add a student

        navigate("/students");

    }

    return (
        <div className="container">
            <h1>Add Student : {student.name}</h1>
            <form>
                <h4>Name</h4>
                <input type="text" placeholder="Enter Name" onInput={changeName}/>
                <h4>Address</h4>
                <input type="text" placeholder="Enter Address" onInput={changeAddress} />
                <h4>Grade</h4>
                <select onChange={changeGrade}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                <h4>Gender</h4>
                <input type="radio" name="gender" onChange={changeGender} value="Male" /> Male &nbsp; 
                <input type="radio" name="gender" defaultChecked  onChange={changeGender} value="Female" /> Female 
                <br/><br/><br/>
                <button type="button" onClick={addStudent}>Add</button>
            </form>
        </div>
    );
}


export default AddStudentComponent;