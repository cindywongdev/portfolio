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
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>Brooklyn-born and raised software engineer with a passion for making a positive impact on the people and world around me. With a bachelor’s degree in psychology and experience in customer service, I aim to tackle problems with a user-centered approach, understanding the human behind the screen. I am a quick learner who is able to fuse my proficiency in graphic design software with newly learned technologies such as React and CSS, allowing me to develop effective and elegant technical solutions.</p>
            <h3>Technical Skills</h3>
            <p>Languages - JavaScript, HTML5, CSS3, Python | Libraries and Frameworks - Express.js, React.js, Node.js, jQuery, SASS, TailwindCSS, Bootstrap, Flask | Databases -  MongoDB, PostgreSQL  | Other - Agile, Scrum, RESTful Routing, JSON, MVC frameworks, Postman, Github, VSCode, Trello, Figma, Adobe Suite (Illustrator, Photoshop, InDesign, XD), Microsoft Office, Canva</p>
        </div>
        <a href="#top"><div class="up-button"><AiOutlineArrowUp/></div></a>
    </main></>)
}

export default About