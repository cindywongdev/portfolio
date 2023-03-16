const About = (props) => {
    const about = require('../data/about.json')

    return (<><main>
        <a id="about"></a>
        <h1 class="section-heading">About Cindy</h1>
        <div className="about">
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    </main></>)
}

export default About