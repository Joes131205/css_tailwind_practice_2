import profile from "./assets/profile.svg";
function Profile() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <img src={profile} className="w-52 h-52 rounded-full" />
            <h1>My Social Page!</h1>
        </div>
    );
}

export default Profile;
