const About = (props) => {
    const about = require('../data/about.json')

    return (<><main>
        <div className="about">
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    </main></>)
}

export default About