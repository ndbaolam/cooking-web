import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div className="sticky p-5 top-0 z-10 shadow-md bg-white">
        <section className="flex flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="w-1/3 flex flex-row items-center justify-left">
            <a href="/" className="text-3xl font-bold text-left flex">
              <span className="mr-3 border-b-2 border-black pb-1">Flavor</span>              
              <img src="/images/logo.png" alt="logo" className="w-10 h-10 scale-150"/>
              <span className="ml-3 border-b-2 border-black pb-1">Fusion</span>
            </a>
          </div>
          <nav className="w-1/3 flex flex-row gap-8 items-center justify-left group" aria-label="main">
            <a href="#" id="home" className="w-1/3 text-center text-lg transition-all ease-linear duration-200 font-medium rounded-lg hover:bg-black hover:text-white p-2">Home</a>
            <a href="#recipes" id="recipes" className="w-1/3 text-center text-lg transition-all ease-linear duration-200 font-medium rounded-lg hover:bg-black hover:text-white p-2">Recipes</a>
            <a href="#shop" id="shop" className="w-1/3 text-center text-lg transition-all ease-linear duration-200 font-medium rounded-lg hover:bg-black hover:text-white p-2">Shop</a>
            <button className="text-xl transition-all ease-linear duration-200 font-medium hover:text-xl">
              <IoSearch />
            </button>
          </nav>

          <div className="w-1/3 flex flex-row items-center justify-end gap-6">
            <span className="rounded-full bg-black text-white p-2 text-center w-10 h-10 font-medium">
              0
            </span>
            <button className="bg-gray-200 max-w-60 rounded-3xl p-2 px-5 text-center hover:scale-110 cursor-pointer transition-all duration-200 font-medium">
              Log in
            </button>
            <button className="bg-black max-w-60 rounded-3xl p-2 px-5 text-center text-white hover:scale-110 cursor-pointer transition-all duration-200 font-medium">
              Sign up
            </button>
          </div>
        </section>
      </div>
    </>
  )
};


{/* <div className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto flex justify-between p-4 items-center">
          <h1 className="text-3xl font-medium">
            <a href="/" className="">Cooking with me!</a>
          </h1>
          <div>
            <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
              &#9776;              
            </button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
              <a href="#home" className="hover:opacity-90">Home</a>
              <a href="#blog" className="hover:opacity-90">Blog</a>
              <a href="#tutorials" className="hover:opacity-90">Tutorials</a>
              <a href="#contact" className="hover:opacity-90">Contact</a>              
            </nav>
          </div>
        </section>
      </div> */}