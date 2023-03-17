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
                <a href="https://drive.google.com/file/d/1x1dF-KLGWM5JVn1CAwy5aj79FAntjEoF/view?usp=share_link" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </nav>
        </header>
    </>)
}

export default Header