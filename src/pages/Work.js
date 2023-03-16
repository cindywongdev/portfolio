const Projects = (props) => {
    const projects = require('../data/projects.json')

    const imageStyling = {
        display: "block",
        width: "30%",
        minWidth: "400px"
    }

    return (<><main>
        <a id="work"></a>
        <h1 class="section-heading text-center">Work</h1>
        {projects.map((project) => (
            <div class="project-card d-flex-col ai-center">
                    <h1>{project.name}</h1>
                    <p>{project.technologies}</p>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.name} style={imageStyling}/>
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <button>Live Demo</button>
                    </a>
                    <a href={project.git} target="_blank" rel="noreferrer">
                        <button>Github Repo</button>
                    </a>
            </div>
        ))}
    </main></>)
}

export default Projects