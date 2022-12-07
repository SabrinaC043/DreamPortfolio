import About from "../../pages/AboutSab/about";
import Project from "../../pages/WorkProjects/project";

import Resume from "../../pages/Resume/resume";

export default function Main({ page }) {
    // change this to a switch case 
    function render() {
        if (page === 'about') {
            return <About />
        }
        else if (page === 'projects') {

            return <Project />
        }
        else if (page === 'resume') {
            return <Resume />

        }


    }


    return (
        <>
            {render()}
        </>
    )
}
