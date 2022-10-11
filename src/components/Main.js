import About from "../pages/About";

export default function Main({ page }) {

    function render() {
        if (page === 'about') {
            return <About />
        }
        else if (page === 'projects') {
            return <h1>This is where the project Page element should go</h1>
        }
        else if (page === 'contact') {
            return <h1>This is where the contact Page element should go</h1>
        }
        // else {
        //     return <h1>This is where the Home Page element should go</h1>
        // }
    }
    return (
        <>
            {render()}
        </>
    )
}