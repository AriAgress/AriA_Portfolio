import React from 'react';
import { projects } from '../../Utils/ProjectObjects';

const Projects = () => {
  return (
    <div>
      {projects.map((p, i) => (
        <div key={i}>
          <h1>{p.projectTitle}</h1>
          <p>{p.description}</p>
          <p>{p.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
