import Image from 'next/image'
import logoImage from '../assets/images/logosaas.png'
import MenuIcon from '../assets/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between w-full">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 custom-gradient blur-md"></div>
            <Image
              src={logoImage}
              alt="Saas Logo"
              className="h-12 w-12 py-1rem relative"
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white " />
          </div>
          <nav className=" flex gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
