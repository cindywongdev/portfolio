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

                    <p class="text">{project.description}</p>

                    <a href={project.live}>
                    <img src={project.image} alt={project.name} style={imageStyling}/>
                    </a>

                    <p class="text">{project.technologies}</p>

                    <container class="buttons-container">
                        <a href={project.live} target="_blank" rel="noreferrer">
                            <button class="proj-button"> Live Demo</button>
                        </a>
                        <a href={project.git} target="_blank" rel="noreferrer">
                            <button class="proj-button">Github Repo</button>
                        </a>
                    </container>
            </div>
        ))}
    </main></>)
}

export default Projects