import axios from "axios";
  const PROJECT_API_BASE_URL ="http://localhost:8080/api/v2/projects";

class ProjectService {
    saveProject(project) {
        return axios.post(PROJECT_API_BASE_URL, project);
    }

    getProjects(){
      return axios.get(PROJECT_API_BASE_URL);
    }

    deleteProject(id){
      return axios.delete(PROJECT_API_BASE_URL+"/"+id);
    }

    getProjectById(id){
      return axios.get(PROJECT_API_BASE_URL+"/"+id);

    }

    updateProject(project, id){
      return axios.put(PROJECT_API_BASE_URL+"/"+id, project);
    }
}

export default new ProjectService();    