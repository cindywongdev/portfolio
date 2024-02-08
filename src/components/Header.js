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
                <a href="https://drive.google.com/file/d/1c7xweliG6J5JSpyzV0TvqCUZv2uH40g6/view?usp=sharing" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </nav>
        </header>
    </>)
}

export default Header