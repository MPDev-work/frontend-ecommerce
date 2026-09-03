import { User, Heart, Handbag, Search } from 'lucide-react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  // const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <div className="relative w-screen h-max">
      <nav className="fixed top-0 inset-x-0 h-12 z-[999] bg-white flex justify-between items-center px-5">
        <Link
          to="/"
          className="uppercase absolute left-1/2 -translate-x-1/2 text-4xl font-semibold text-black tracking-tighter"
        >
          Weyoung
        </Link>
        <ul className="flex items-center gap-6">
          <Link to="/" className="uppercase text-base font-medium">
            Home
          </Link>
          <Link className="uppercase text-base font-medium">Shop All</Link>
          <Link to="/brands" className="uppercase text-base font-medium">
            Brand
          </Link>
          <Link className="uppercase text-base font-medium">Promotion</Link>
          <Link className="uppercase text-base font-medium">Explore</Link>
        </ul>
        <ul className="flex items-center gap-8">
          <Search
            // onClick={() => setIsOpenSearch((prev) => !prev)}
            size={20}
            className="text-black cursor-pointer"
          />
          <Link to="" className="cursor-pointer">
            <Heart size={20} className="text-black" />
          </Link>
          <Link to="" className="cursor-pointer">
            <Handbag size={20} className="text-black" />
          </Link>
          <Link to="/login" className="cursor-pointer">
            <User size={20} className="text-black" />
          </Link>
        </ul>
      </nav>
      <div className=""></div>
    </div>
  );
}

export default NavBar;
