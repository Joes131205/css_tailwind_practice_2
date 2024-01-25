import profile from "./assets/profile.svg";
function Profile() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <img src={profile} className="w-40 h-40 rounded-full" />
            <h1>All my links</h1>
        </div>
    );
}

export default Profile;
