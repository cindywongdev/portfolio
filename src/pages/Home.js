import Header from "../components/Header"

const Home = (props) => {
    const frontPageStyling = {
        backgroundColor: "",
        height: "93vh"
    }

    return <main>
            <a id="top"></a>
            <div class="front-page-div d-flex jc-center ai-center" style={frontPageStyling}>
                <div class="text-center">
                    <h1 class="name-title">Cindy Wong</h1>
                    <h2 class="job-title">Software Engineer</h2>
                    <h3 class="location-title">New York, NY</h3>
                    <Header></Header>
                </div>
            </div>
        </main>
}

export default Home