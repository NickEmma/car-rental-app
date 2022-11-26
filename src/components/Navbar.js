import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import logo from '../assets/logo.gif';
import navbarItems from '../data';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex max-h-[90vh]">
        <div
          className={`${
            open ? 'w-56' : 'w-20'
          } h-screen border-r-2 border-slate-300 bg-white relative duration-300 `}
        >
          <AiOutlineBars
            className={`absolute cursor-pointer -right-3 top-9 w-9 font-medium text-2xl ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${
              open ? 'w-36' : 'w-20'
            } cursor-pointer duration-300 my-4 mx-auto border-rounded`}
          >
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="pt-6">
              {navbarItems.map((item) => (
                <li
                  key={item.name}
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                    item.gap ? 'mt-9' : 'mt-2'
                  }`}
                >
                  <span className="text-black font-extrabold text-xl">
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-extrabold text-center text-slate-800`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Homepage</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
