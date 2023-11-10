import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import AddProject from './components/AddProject';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import EmployeeList from './components/EmployeeList';
import ProjectList from './components/ProjectList';
import UpdateEmployee from './components/UpdateEmployee';
import UpdateProject from './components/UpdateProject';
import AssignTask from './components/AssignTask';




function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
  
   <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='/employeeList' element={<EmployeeList/>}/>
    <Route path='/assignTask' element={<AssignTask/>}/>
    <Route path='/projectList' element={<ProjectList/>}/>
     <Route path='/addEmployee' element={<AddEmployee/>}/>
     <Route path='/addProject' element={<AddProject/>}/>
     <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
     <Route path='/editProject/:id' element={<UpdateProject/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
