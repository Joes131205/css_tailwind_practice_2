import profile from "./assets/profile.svg";
function Profile() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <img src={profile} className="w-40 h-40 rounded-full" />
            <h1 className="font-bold text-xl">Joes131205</h1>
            <p>A guy who likes memes</p>
        </div>
    );
}

export default Profile;
