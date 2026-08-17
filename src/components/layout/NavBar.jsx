import { User, Heart, Handbag } from 'lucide-react';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 h-12 bg-white flex justify-between items-center px-5">
      <div className="uppercase absolute left-1/2 -translate-x-1/2 text-4xl font-semibold text-black tracking-tighter">
        Weyoung
      </div>
      <ul className="flex items-center gap-8">
        <div className="uppercase text-base font-medium"></div>
      </ul>
      <ul className="flex items-center gap-8">
        <div className="cursor-pointer">
          <Heart size={20} className="text-black" />
        </div>
        <div className="cursor-pointer">
          <Handbag size={20} className="text-black" />
        </div>
        <div className="cursor-pointer">
          <User size={20} className="text-black" />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
