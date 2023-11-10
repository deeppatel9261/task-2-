import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee, deleteEmployee}) => {
    const navigate =useNavigate();
    
    const editEmployee =(e, id) => {
        e.preventDefault();
        navigate("/editEmployee/${id}");
    };
  return (
    <tr key ={employee.id}>
                                <td className='text-left px-6 py-4 whitespace-nowrap'>
                                    <div className='text-small text-black'>
                                        {employee.firstName}
                                        </div>
                                </td>
                                <td className='text-left px-6 py-4 whitespace-nowrap'>
                                    <div className='text-small text-black'>
                                        {employee.lastName}
                                        </div>
                                </td>
                                <td className='text-left px-6 py-4 whitespace-nowrap'>
                                    <div className='text-small text-gray-500'>
                                        {employee.emailId}
                                        </div>
                                </td>
                                <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                                    <a 
                                     onClick={(e,id)=> editEmployee(e, employee.id)}
                                    className='text-indigo-600 hover:cursor-pointer hover:text-indigo-900 px-6 '>
                                        Edit
                                        </a>
                                    <a 
                                    onClick={(e,id)=> deleteEmployee(e, employee.id)}
                                     className='text-indigo-600  hover:text-indigo-900 hover:cursor-pointer'>
                                        Delete
                                        </a>                                     
                                </td>
                            </tr>
  )
}

export default Employee