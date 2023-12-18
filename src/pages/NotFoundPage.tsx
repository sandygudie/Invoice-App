import errorImage from "../assets/empty-state.png";

function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <img src={errorImage} alt="" />
      <a href="/" className="mt-4 bg-primary/30 py-4 text-sm hover:bg-primary/20 rounded-full px-4">
        Back to home page
      </a>
    </div>
  );
}

export default NotFoundPage;
