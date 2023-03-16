const Footer = (props) => {

    const footerStyling = {
        height: "10rem"
    }

    return (<>
        <footer style={footerStyling}>
            <div className="footer-text-area">
                <h2>Cindy Wong</h2>
                <p>This portfolio site was made by Cindy Wong. Check out Cindy's links! She will be very happy.</p>
            </div>
            <div className="footer-nav">
                <a href="https://github.com/cindywongdev" target="_blank" rel="noreferrer">
                    <div>Github</div>
                </a>
                <a href="https://www.linkedin.com/in/cindywongdev/" target="_blank" rel="noreferrer">
                    <div>LinkedIn</div>
                </a>
                <a href="https://www.linkedin.com/in/cindywongdev/">
                    <div>Contact</div>
                </a>
            </div>
        </footer>
    </>)
}

export default Footer