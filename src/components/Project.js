import React from 'react'
import { useNavigate } from 'react-router-dom';

const Project = ({project, deleteProject}) => {
    const navigate =useNavigate();
    
    const editProject =(e, id) => {
        e.preventDefault();
        navigate("/editProject/${id}");
    };
  return (
    <tr key ={project.id}>
                                <td className='text-left px-6 py-4 whitespace-nowrap'>
                                    <div className='text-small text-black'>
                                        {project.projectName}
                                        </div>
                                </td>
                                <td className='text-left px-6 py-4 whitespace-nowrap'>
                                    <div className='text-small text-black'>
                                        {project.description}
                                        </div>
                                </td>
                                
                                <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                                    <a 
                                     onClick={(e,id)=> editProject(e, project.id)}
                                    className='text-indigo-600 hover:cursor-pointer hover:text-indigo-900 px-6 '>
                                        Edit
                                        </a>
                                    <a 
                                    onClick={(e,id)=> deleteProject(e, project.id)}
                                     className='text-indigo-600  hover:text-indigo-900 hover:cursor-pointer'>
                                        Delete
                                        </a>                                     
                                </td>
                            </tr>
  )
}

export default Project