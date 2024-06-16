export default function Header() {
  return (
    <>
      <div className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto flex justify-between p-4 items-center">
          <h1 className="text-3xl font-medium">
            <a href="/" className="">Cooking Website</a>
          </h1>
          <div>
            <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
              &#9776;              
            </button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
              <a href="#home" className="hover:opacity-90">Home</a>
              <a href="#blog" className="hover:opacity-90">Blog</a>
              <a href="#contact" className="hover:opacity-90">Contact</a>              
            </nav>
          </div>
        </section>
      </div>
    </>
  )
};
