import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewStudentsComponent() {

   const[students,setStudents] = useState(null);


   //you want to execute something when students state list variable changes use below code
   // useEffect(()=>{

   // },[students]);

   //you want execute something when the component is visible or loaded initially
   useEffect(()=>{

      //send a request to the api and get json data and set it as the state list variable students

   },[]);

   return (
      <div className="container">
         <h1>View Students</h1>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                  <th>GRADE</th>
                  <th>GENDER</th>
                  <th>ACTION</th>
                  <th>ACTION</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Stan</td>
                  <td>Trishur</td>
                  <td>F</td>
                  <td>Male</td>
                  <td>
                     <Link to="/update/5" className="btn">Update</Link>
                  </td>
                  <td>
                     <button className="danger">Delete</button>
                  </td>
               </tr>
               <tr>
                  <td>2</td>
                  <td>Michelle</td>
                  <td>Trishur</td>
                  <td>F</td>
                  <td>Female</td>
                  <td>
                     <Link to="/update/5" className="btn">Update</Link>
                  </td>
                  <td>
                     <button className="danger">Delete</button>
                  </td>
               </tr>
               <tr>
                  <td>3</td>
                  <td>Steve</td>
                  <td>Trishur</td>
                  <td>F</td>
                  <td>Male</td>
                  <td>
                     <Link to="/update/5" className="btn">Update</Link>
                  </td>
                  <td>
                     <button className="danger">Delete</button>
                  </td>
               </tr>
               <tr>
                  <td>4</td>
                  <td>Lovely</td>
                  <td>Trishur</td>
                  <td>F</td>
                  <td>Female</td>
                  <td>
                     <Link to="/update/5" className="btn">Update</Link>
                  </td>
                  <td>
                     <button className="danger">Delete</button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default ViewStudentsComponent;