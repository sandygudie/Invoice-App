import errorImage from "../assets/errorimage.png"

function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
        <img src={errorImage} alt =""/>
        <a href="/"  className="mt-4">Back to home page</a>
    </div>
  )
}

export default NotFoundPage