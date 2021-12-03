import Footer from "../components/footer";
import NavBar1 from "../components/navBar1";
import NavBar2 from "../components/navBar2";
import About from "../components/pages/about";
import Work from "../components/pages/work";

export default function Home() {

    function job() {
        const jobs = ['Verified Discord bot developer', 'Web developer', 'BackEnd developer']
        setInterval(() => {
            document.getElementById('job').innerHTML = jobs[Math.floor(Math.random() * jobs.length)]
        }, 5000);

    }

    return (
        <>
            <div className="h-screen">
                <div className="lg:hidden">
                    <NavBar1 />
                </div>
                <div className="flex h-screen justify-center items-center lg:justify-start lg:p-72">
                    <div className="grid text-center lg:text-left overflow-hidden">
                        <h1 className="text-gray-300 text-4xl md:text-6xl lg:text-7xl font-outfit">Vann-Dev</h1>
                        <p onLoad={job()} id="job" className="text-gray-300 mt-2 lg:ml-2 md:mt-4 md:text-xl lg:text-2xl">Verified Discord bot developer</p>
                        <div className="hidden lg:block">
                            <NavBar2 />
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Work />
            <Footer />
        </>
    )
}