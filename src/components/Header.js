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
                <button>
                    Download Resume
                </button>
            </nav>
        </header>
    </>)
}

export default Header