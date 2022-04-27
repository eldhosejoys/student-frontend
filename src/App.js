import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddStudentComponent from './components/AddStudentComponent';
import ViewStudentsComponent from './components/ViewStudentsComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <HeaderComponent />
<Routes>
  <Route path='/' element={<ViewStudentsComponent/>} />
  <Route path='/students' element={<ViewStudentsComponent/>}/>
  <Route path='/add' element={<AddStudentComponent/>} />
  <Route path='/update/:id' element={<UpdateStudentComponent/>} />
</Routes>
      <FooterComponent />
    </div>
  );
}

export default App;