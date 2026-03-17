import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/projects/${id}`)
       .then(res => setProject(res.data))
       .catch(console.error)
       .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
      );
  }

  if (!project) return <div className="text-center py-20">Project not found</div>;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
       <div className="container mx-auto px-4">
           <Link to="/#portfolio" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition">
               <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
           </Link>
           
           <div className="max-w-4xl mx-auto">
               <div className="rounded-2xl overflow-hidden shadow-2xl mb-10">
                  {project.image ? (
                      <img src={`http://localhost:8000${project.image}`} alt={project.title} className="w-full h-auto" />
                  ) : (
                      <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                  )}
               </div>

               <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                   <div>
                       <h1 className="text-4xl font-bold mb-4 text-gray-900">{project.title}</h1>
                       <div className="flex flex-wrap gap-2">
                           <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{project.category}</span>
                           {project.technologies && project.technologies.map((tech, i) => (
                               <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                           ))}
                       </div>
                   </div>
                   
                   {project.url && (
                       <a 
                         href={project.url} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold flex items-center shadow-lg transition transform hover:-translate-y-1"
                       >
                           Visit Site <ExternalLink size={18} className="ml-2" />
                       </a>
                   )}
               </div>

               <div className="prose prose-lg max-w-none text-gray-600">
                   <p>{project.description}</p>
                   {/* Add more details here if available */}
               </div>
           </div>
       </div>
    </div>
  );
};

export default ProjectDetails;
