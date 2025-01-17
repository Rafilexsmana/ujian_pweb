import React from 'react';

const menulinks = [
  {
    id: 1,
    name: 'Home',
    link: "/#",
  },
  {
    id: 2,
    name: 'Shop',
    link: "/#Shop",
  },
  {
    id: 3,
    name: 'About',
    link: "/#About",
  },
  {
    id: 4,
    name: 'Blogs',
    link: "/#Blogs",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#"
            className="text-secondary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            Retro TimerID
          </a>
          <div>
            <ul className="flex space-x-4">
              {menulinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
