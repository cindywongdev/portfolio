const Header = (props) => {
    // inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "1rem",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }

    return (<>
        <header>
            <nav style={navStyle}>
                <a href="#work">
                    <div>Work</div>
                </a>
                <a href="#about">
                    <div>About</div>
                </a>
                <a href="%PUBLIC_URL%/Cindy_Wong_Resume.pdf">
                    Resume
                </a>
            </nav>
        </header>
    </>)
}

export default Header