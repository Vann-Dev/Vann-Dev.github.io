import { Link } from "react-router-dom"

export default function NavBar1() {
    function hideShow() {
        const element = document.getElementById('navBarAnimation')
        if (element.classList.contains('navBarHide')) {
            element.classList = 'slideRight'
            element.classList.add('navBarShow')
            element.classList.remove('navBarHide')
            document.getElementById('X').classList.remove('hidden')
            document.getElementById('=').classList.add('hidden')
        } else if (!element.classList.contains('navBarHide')) {
            element.classList.remove('navBarShow')
            element.classList = 'slideRightHide'
            element.classList.add('navBarHide')
            document.getElementById('=').classList.remove('hidden')
            document.getElementById('X').classList.add('hidden')
        }
    }

    return (
        <>
            <nav style={{ 'backgroundColor': "#111827" }} className="flex fixed z-30 w-full justify-between items-center p-6">
                <div>
                    <a className="font-yellowTail text-white text-2xl md:text-4xl" href="/">Vann-Dev</a>
                </div>
                <div id="=" onClick={hideShow} className="grid space-y-1 md:space-y-2 cursor-pointer">
                    <div className="bg-gray-300 rounded-sm h-1 w-6 md:w-8"></div>
                    <div className="bg-gray-300 rounded-sm h-1 w-6 md:w-8"></div>
                    <div className="bg-gray-300 rounded-sm h-1 w-6 md:w-8"></div>
                </div>
                <div onClick={hideShow} id="X" className="hidden cursor-pointer">
                    <div className="bg-gray-300 transform rotate-45 rounded-sm h-1 w-6 md:w-8"></div>
                    <div className="bg-gray-300 transform -rotate-45 rounded-sm h-1 w-6 md:w-8"></div>
                </div>
            </nav>

            <div id="navBarAnimation" className="navBarHide">
                <div id="navBar" style={{ 'backgroundColor': "#111827" }} className="fixed z-40 overflow-hidden top-16 h-screen w-full p-6 items-center">
                    <div className="grid space-y-24 text-center mt-10 font-outfit">
                        <a onClick={hideShow} className="text-gray-300 mt-auto mb-auto text-3xl" href={"#about"}>ABOUT</a>
                        <a onClick={hideShow} className="text-gray-300 mt-auto mb-auto text-3xl" href={"#work"}>WORK</a>
                        <Link onClick={hideShow} className="text-gray-300 mt-auto mb-auto text-3xl" to={"/moe"}>Moe</Link>
                    </div>
                </div>
            </div>
        </>
    )
}