import Profile from "./Profile.jsx";
import Links from "./Links.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className="bg-[#081a01] h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between w-fit h-fit lg:px-16 sm:px-10 py-16 bg-[#1d5007] gap-10 text-white container mx-auto rounded-xl shadow-xl shadow-emerald-500">
                <Profile />
                <Links />
                <Footer />
            </div>
        </div>
    );
}

export default App;
