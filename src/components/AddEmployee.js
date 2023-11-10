import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee]= useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });
    
    const navigate = useNavigate ();

    const handleChange =(e)=> {
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    };

    const saveEmployee=(e)=> {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response)=> {
            console.log(response);
            navigate("/employeeList");
        })
       .catch((error)=> {
        console.log(error);
       });  
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        });
    }
  return (
    <div className='self-center items-center mx-auto flex max-w-2xl shadow border border-gray-400 justify-center px-10 py-6'>
        <div className='px-8 py-8'>
            <div className='font-semibold text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-900 text-sm font-normal'>First Name</label>
                <input type='text' 
                name="firstName"
                 value={employee.firstName} 
                 onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border  border-gray-300 mt-2 px-2 py-2'>
                </input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-900 text-sm font-normal'>Last Name</label>
                <input type='text' 
                name="lastName" 
                value={employee.lastName}
                onChange={(e)=> handleChange(e)}
                 className='h-10 w-96 border  border-gray-300 mt-2 px-2 py-2'></input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-900 text-sm font-normal'>Email</label>
                <input type='text' 
                name="emailId"
                value={employee.emailId}
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border border-gray-300 mt-2 px-2 py-2'></input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                onClick={saveEmployee}
                className=' rounded text-white font-semibold item-center justify-center bg-green-600 hover:bg-green-800 py-2 px-2'>
                    Save
                </button>
                
                <button
                onClick={reset}
                 className='rounded text-white font-semibold item-center justify-center bg-red-600 hover:bg-red-900 py-2 px-2'>
                    Clear
                    </button>
            </div>
        </div>
    </div>

  );
  };


export default AddEmployee