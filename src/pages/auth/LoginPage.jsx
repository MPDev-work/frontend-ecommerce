import BannerLogin from '../../assets/banner/phkabanner.webp';

function LoginPage() {
  return (
    <section className="relative w-screen h-[calc(100vh-48px)] flex items-center justify-center mt-12">
      <div className="absolute z-0 w-full h-full flex items-center justify-center">
        <img className="w-full h-full object-cover" src={BannerLogin} />
      </div>
      <div className="absolute z-10 w-1/2 left-5 h-[calc(100%-40px)] bg-black/20 backdrop-blur-3xl rounded-[60px] flex flex-col items-justify-center p-10">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl text-white">User Information</h1>
        </div>
        <form
          className="w-full flex flex-col gap-2.5 mt-10"
          action="#"
          method="post"
        >
          <label htmlFor="#">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            className="h-12 w-full rounded-full bg-white text-black px-2.5 border-0 outline-0 transition duration-200 hover:outline hover:outline-gray-800 focus:outline-gray-800"
            type="text"
            placeholder="Full name"
          />
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
