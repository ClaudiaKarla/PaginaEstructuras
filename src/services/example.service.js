import axios from 'axios';

class ProyectService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
  
    });
  }
  
  // POST /api/examples
  getProyectos = async () => {
    return this.api.get('/api/todos-los-proyectos');
  }

  // GET /api/examples
  createProyect = async (requestBody) => {
    console.log(requestBody)
    return this.api.post('/api/crear/proyectos',requestBody);
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/un-proyecto/${id}`);
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/actualizar-proyecto/${id}`,requestBody);
  }

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/api/borrar-proyectos/${id}`);
  } 
}

// Create one instance of the service
const proyectService = new ProyectService();

export default proyectService;


