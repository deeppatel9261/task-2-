import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectService from '../services/ProjectService';
import Project from './Project';

const ProjectList = () => {

    const navigate = useNavigate();
    
    const [loading, setLoading] =useState(true);
    const [projects, setProjects]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await ProjectService.getProjects();
                setProjects(response.data) 
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    const deleteProject =(e, id) =>{
        e.preventDefault();
        ProjectService.deleteProject(id)
        .then((res) => {
            if(projects){
                setProjects((prevElement) => {
                    return prevElement.filter((project) => project.id !==id);
                });
            }

    })
    };

    return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button 
            onClick={() => navigate("/addProject")}
            className='rounded bg-slate-600 text-white px-6 py-2'>
                Add Project
                </button>
                </div>
                <div className='Flex shadow border-b'>
                    <table className="min-w-full">
                        <thead className='bg-gray-100'>
                            <tr>
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-6'>
                                  Project Name
                                </th>
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-6' >
                                  Description
                                </th>
                                <th className='text-right font-medium text-gray-700 uppercase tracking-wider py-3 px-6'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        {!loading && (
                        <tbody className='bg-white'>
                            {projects.map((project)=>(
                                <Project project={project} 
                                 deleteProject= {deleteProject}
                                 key={project.id}></Project>
                             ))}
                            
                        </tbody>)}
                    </table>
                </div> 
        </div>
  )
}

export default ProjectList