import { FaRegUser } from "react-icons/fa";
function Profile() {
  return (
    <div className="border-l lg:border-l-0 lg:border-t p-4 px-5 border-gray-300">
      <FaRegUser
        size={30}
        className="text-primary border border-primary border-[1px] rounded-full p-1"
      />
    </div>
  );
}

export default Profile;
