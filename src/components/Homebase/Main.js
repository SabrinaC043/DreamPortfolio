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




 // switch (page) {
        //     case 'about':
        //         return <About />
        //         break;
        //     case 'projects':
        //        return <Project />
        //         break;
        //     case 'contact':
        //        return <Contact />
        //         break;
        //     case 'resume':
        //         return <Resume />
        //         break;
        //     default: console.log("ERROR");
        // }

