import x from "./assets/x.svg";
import instagram from "./assets/instagram.svg";
import discord from "./assets/discord.svg";
import github from "./assets/github.svg";
import youtube from "./assets/youtube.svg";

function Links() {
    function handleClick(link) {
        switch (link) {
            case "x":
                window.open("https://twitter.com/Joes131205");
                break;
            case "instagram":
                window.open("https://www.instagram.com/jthesomething/");
                break;
            case "discord":
                window.open("discordapp.com/users/564789477680218113");
                break;
            case "github":
                window.open("https://github.com/Joes131205");
                break;
            case "youtube":
                window.open(
                    "https://www.youtube.com/channel/UCmmRKoLIJIOiVkSfJiTBeRw"
                );
                break;
        }
    }
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <button
                className="bg-black text-white px-16 sm:px-24 py-3 rounded-lg flex gap-8 text-center items-center justify-center active:translate-y-0.5 hover:scale-105 hover:bg-gray-950 transition font-bold"
                onClick={() => handleClick("x")}
            >
                <img src={x} alt="Twitter / X" className="w-5" />
                X
                <img src={x} alt="Twitter / X" className="w-5" />
            </button>
            <button
                className="bg-gradient-to-r from-[#a87b00] to-[#DD2A7B] text-white  px-6 sm:px-14 py-1 rounded-lg flex gap-1 text-center items-center justify-center active:translate-y-0.5 hover:from-[#DD2A7B] hover:to-[#a87b00] hover:scale-105 transition font-bold"
                onClick={() => handleClick("instagram")}
            >
                <img src={instagram} alt="Instagram" className="w-14" />
                Instagram
                <img src={instagram} alt="Instagram" className="w-14" />
            </button>
            <button
                className="bg-gradient-to-r from-[#2c3453] to-[#0e194b] text-white  px-16 sm:px-24 py-3 rounded-lg flex gap-2 text-center items-center justify-center active:translate-y-0.5 hover:from-[#222a4e] hover:to-[#1e379c]  hover:scale-105 transition font-bold"
                onClick={() => handleClick("discord")}
            >
                <img src={discord} alt="Discord" className="w-5" />
                Discord
                <img src={discord} alt="Discord" className="w-5" />
            </button>
            <button
                className="bg-white text-black px-16 sm:px-24 py-2.5 rounded-lg flex gap-2 text-center items-center justify-center active:translate-y-0.5 hover:bg-gray-300 hover:scale-105 transition font-bold font"
                onClick={() => handleClick("github")}
            >
                <img src={github} alt="Github" className="w-5" />
                Github
                <img src={github} alt="Github" className="w-5" />
            </button>

            <button
                className="bg-red-950 text-white px-16 sm:px-24 py-2.5 rounded-lg flex gap-2 text-center items-center justify-center active:translate-y-0.5 hover:bg-red-800 hover:scale-105 transition font-bold font"
                onClick={() => handleClick("youtube")}
            >
                <img src={youtube} alt="Youtube" className="w-5" />
                Youtube
                <img src={youtube} alt="Youtube" className="w-5" />
            </button>
        </div>
    );
}

export default Links;
