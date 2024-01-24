function Links() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <button className="bg-black text-white px-48 py-5 rounded-lg">
                X
            </button>
            <button className="bg-gradient-to-r from-[#a87b00] to-[#DD2A7B] text-white px-48 py-5 rounded-lg">
                Instagram
            </button>
            <button className="bg-gradient-to-r from-purple-950 to-indigo-900 text-white px-48 py-5 rounded-lg">
                Discord
            </button>
            <button className="bg-black text-white px-48 py-5 rounded-lg">
                Github
            </button>
        </div>
    );
}

export default Links;
