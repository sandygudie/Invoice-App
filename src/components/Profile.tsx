import Avatar from "../assets/profile-image.jpg";

function Profile() {
  return (
    <div className="border-l lg:border-l-0 lg:border-t p-4 px-5 border-gray-300">
      <img src={Avatar} alt="avatar" className="rounded-full inline w-7 h-7" />
    </div>
  );
}

export default Profile;
