import { useState, useEffect } from 'react';
import Project from './Project';

interface IProject {
    id: number
    full_name: string
    name: string 
    html_url: string
    description: string,
    forks_count: number
    watchers_count: number
}

const Projects = () => {

    const [projects, setProjects] = useState<Project[] | null>(null);

    useEffect(() => {

        const getData = async () => {
            const data = await fetch('https://api.github.com/users/rasmus-ob/repos');

            const json = await data.json() as IProject[];

            setProjects(json);

            
        }

        getData().catch(console.error);
    
    })
    

    return (
        <div>
            {projects != null && projects.map((project) => <Project key={project.id} project={project} />)}
        </div>
    )
}

export default Projects; 
