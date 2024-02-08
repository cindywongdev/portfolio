import { AiOutlineArrowUp } from "react-icons/ai"

const About = (props) => {
    const about = require('../data/about.json')

    const aboutStyling = {
        width: "70%",
        margin: "0 auto"
    }

    return (<><main>
        <a id="about"></a>
        <h1 class="section-heading text-center">About Cindy</h1>
        <div className="about" style={aboutStyling}>
            <img className="about-img" alt="Cindy in Coit Tower, smiling by two windows overlooking San Francisco's cityscape." src="https://i.imgur.com/pmTUZ8Q.jpg"/>

            <div className="about-text">
                <p>Brooklyn-born and raised software engineer with a background in psychology. Wanting to impact the world at a larger level, I shifted my focus from driving change at the individual level to the societal level. I am well versed in JavaScript and React, and I’m particularly passionate about creating impactful user-centric frontend experiences addressing broader societal issues, especially mental health and wellness.</p>
                <h3>Technical Skills</h3>
                <p>Programming Languages: JavaScript, HTML, CSS, Python, SQL</p>
                <p>Libraries and Frameworks: React, Vue, NodeJS, Express.js, jQuery, SASS, TailwindCSS, Bootstrap, Django, Flask
    Databases: MongoDB, PostgreSQL</p>
    <p>Other: Agile, REST, MVC, Jest, Postman, Git, Github, Auth0, Jira, Figma, Adobe Suite (Illustrator, Photoshop, InDesign, XD)</p>

                <h2>Contact Me</h2>
                <p>{about.email}</p>
                <a href="#">https://github.com/cindywongdev</a>
                <br></br>
                <a href="#">https://linkedin.com/cindywongdev</a>
            </div>  
        </div>
        <a href="#top"><div class="up-button"><AiOutlineArrowUp/></div></a>
    </main></>)
}

export default About