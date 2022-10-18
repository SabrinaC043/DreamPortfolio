import About from "../pages/about";
import Project from "../pages/project";
import Contact from "../pages/contact";
import Resume from "../pages/resume";

export default function Main({ page }) {
    // change this to a switch case 
    function render() {
        if (page === 'about') {
            return <About />
        }
        else if (page === 'projects') {
            // return <h1>This is where the project Page element should go</h1>
            return <Project />
        }
        else if (page === 'contact') {
            return <Contact />
        }
        else if (page === 'resume') {
            return <Resume />
            // <h1>This is where the Resume Page element should go</h1>
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

