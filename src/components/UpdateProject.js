import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProjectService from '../services/ProjectService';

const UpdateProject = () => {

    const {id} = useParams();
    const [project, setProject]= useState ({
        id: id,
        projectName:"",
        description:"",
    });

    const handleChange =(e)=> {
        const value=e.target.value;
        setProject({...project,[e.target.name]:value});
    };

   useEffect(() => {
      const fetchData = async()=> {
        try{
           const response = await ProjectService.getProjectById(id);  
           setProject(response.fetchData);
        }catch (error){
            console.log(error);
        }
      };
      fetchData();
    }, [])
    

    const updateProject =(e) => {
        e.preventDefault();
    };
  return (
    <div className='item-center flex max-w-2xl shadow border-b border-black'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Project</h1>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Project Name</label>
                <input type='text' 
                name="firstName"
                 value={project.projectName} 
                 onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'>
                </input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Description</label>
                <input type='text' 
                name="lastName" 
                value={project.lastName}
                onChange={(e)=> handleChange(e)}
                 className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            
            <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                onClick={updateProject}
                className=' rounded text-white fuont-semibold item-center justify-center bg-green-400 hover:bg-green-700 py-2 px-2'>
                Update
                </button>
                
                <button
                 className='rounded text-white font-semibold item-center justify-center bg-red-400 hover:bg-red-700 py-2 px-2'>
                    Cancel
                    </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateProject