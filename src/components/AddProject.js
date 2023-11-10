import React, { useState } from 'react'
import ProjectService from '../services/ProjectService';
import { useNavigate } from 'react-router-dom';
import Project from './Project';

const AddProject = () => {
        const [project, setProject]= useState ({
            id: "",
            projectName:"",
            description:"",
    });
    
    const navigate = useNavigate ();

    const handleChange =(e)=> {
        const value=e.target.value;
        setProject({...project,[e.target.name]:value});
    };

    const saveProject=(e)=> {
        e.preventDefault();
        ProjectService.saveProject(project)
        .then((response)=> {
            console.log(response);
            navigate("/projectList");
        })
       .catch((error)=> {
        console.log(error);
       });  
    };

    const reset = (e) => {
        e.preventDefault();
        setProject({
            id: "",
            projectName:"",
            description:"",
        });
    }
  return (
    <div className='items-center mx-auto flex max-w-2xl shadow border border-gray-400 justify-center px-10 py-6'>
        <div className='px-8 py-8'>
        <div className='font-semibold text-2xl tracking-wider'>
                <h1>Add New Project</h1>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-900 text-sm font-normal'>Project Name</label>
                <input type='text' 
                name="projectName"
                 value={project.ProjectName} 
                 onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'>
                </input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-900 text-sm font-normal'>Description</label>
                <input type='text' 
                name="description" 
                value={project.description}
                onChange={(e)=> handleChange(e)}
                 className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            
            <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                onClick={saveProject}
                className=' rounded text-white font-semibold item-center justify-center bg-green-600 hover:bg-green-700 py-2 px-2'>
                    Save
                </button>
                
                <button
                onClick={reset}
                 className='rounded text-white font-semibold item-center justify-center bg-red-600 hover:bg-red-700 py-2 px-2'>
                    Clear
                    </button>
            </div>
        </div>
    </div>

  );
  };


export default AddProject