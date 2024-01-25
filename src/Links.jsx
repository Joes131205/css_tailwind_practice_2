import x from "./assets/x.svg";
import instagram from "./assets/instagram.svg";
import discord from "./assets/discord.svg";
import github from "./assets/github.svg";
function Links() {
    function handleClick(link) {
        switch (link) {
            case "x":
                window.open("https://twitter.com/Joes131205");
                break;
            case "instagram":
                window.open("https://www.instagram.com/");
                break;
            case "discord":
                window.open("discordapp.com/users/564789477680218113");
                break;
            case "github":
                window.open("https://github.com/Joes131205");
                break;
        }
    }
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <button
                className="bg-black text-white px-24 py-5 rounded-lg flex gap-8 text-center items-center justify-center"
                onClick={() => handleClick("x")}
            >
                <img src={x} alt="Twitter / X" className="w-5" />
                X
                <img src={x} alt="Twitter / X" className="w-5" />
            </button>
            <button
                className="bg-gradient-to-r from-[#a87b00] to-[#DD2A7B] text-white px-14 py-5 rounded-lg flex gap-1 text-center items-center justify-center"
                onClick={() => handleClick("instagram")}
            >
                <img src={instagram} alt="Instagram" className="w-14" />
                Instagram
                <img src={instagram} alt="Instagram" className="w-14" />
            </button>
            <button
                className="bg-gradient-to-r from-purple-950 to-indigo-900 text-white px-24 py-5 rounded-lg flex gap-2 text-center items-center justify-center"
                onClick={() => handleClick("discord")}
            >
                <img src={discord} alt="Discord" className="w-5" />
                Discord
                <img src={discord} alt="Discord" className="w-5" />
            </button>
            <button
                className="bg-white text-black px-24 py-5 rounded-lg flex gap-2 text-center items-center justify-center"
                onClick={() => handleClick("github")}
            >
                <img src={github} alt="Github" className="w-5" />
                Github
                <img src={github} alt="Github" className="w-5" />
            </button>
        </div>
    );
}

export default Links;
