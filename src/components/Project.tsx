interface Props {
    project: {
        id: number
        full_name: string
        name: string 
        html_url: string
        description: string,
        forks_count: number
        watchers_count: number
    }
}

const Project = ({ project }: Props) => { 

    return (
        <div className=''>
            <h3 className='text-xl'>{project.full_name}</h3>
            <a href={project.html_url}>{project.html_url}</a>
            <p>{project.description}</p>
            <p>forks: {project.forks_count}</p>
            <p>watchers: {project.watchers_count}</p>
        </div>
    )
}

export default Project;
