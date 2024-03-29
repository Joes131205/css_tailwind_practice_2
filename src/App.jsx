import Profile from "./Profile.jsx";
import Links from "./Links.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className="bg-[#081a01] h-screen w-screen flex flex-col items-center justify-center select-none">
            <div className="flex flex-col items-center justify-between w-fit h-fit overflow-hidden sm:px-22 px-12 py-2 md:py-8 bg-[#1d5007] gap-6 text-white container mx-auto rounded-xl shadow-xl shadow-emerald-500">
                <Profile />
                <Links />
                <Footer />
            </div>
        </div>
    );
}

export default App;
