import Profile from "./Profile.jsx";
import Links from "./Links.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className="bg-[#081a01] h-screen w-screen flex flex-col items-center justify-around gap-2 text-white">
            <Profile />
            <Links />
            <Footer />
        </div>
    );
}

export default App;
