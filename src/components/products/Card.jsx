import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

import Image from '../../assets/banner/imgi_143_bb45451b-2a1a-474b-b0e4-553056542ad4.jpeg';

function Card() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2.5 overflow-hidden">
      <Link
        to="/"
        className="relative w-full aspect-[3/4] rounded-[18px] overflow-hidden"
      >
        <img className="w-full h-full object-cover" src={Image} />
        <div className="absolute bottom-0 left-0 h-4 pl-3.5 pr-1 rounded-tr-lg bg-emerald-700 flex items-center gap-1">
          <span className="text-[10px] text-amber-300">Free</span>
          <span className="text-[10px] text-white">delivery</span>
        </div>
      </Link>
      <div className="w-full flex flex-col gap-1.5 px-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-base tracking-tighter truncate">
            Weyoung Cotton pad
          </h1>
          <button className="cursor-pointer">
            <Heart size={18} color="black" />
          </button>
        </div>
        <div className="w-full flex items-start gap-2">
          <h1 className="text-xl font-medium text-red-500">$12.99 USD</h1>
          <h1 className="text-sm text-gray-700 line-through">$12.56 USD</h1>
        </div>
      </div>
      <div className="absolute z-10 p-[3px_8px] top-2 right-2 flex items-center justify-center rounded-full text-xs text-black border border-gray-300 bg-white">
        Weyoung
      </div>
      <div className="absolute z-10 p-[3px_8px] top-2 left-2 flex items-center justify-center rounded-full text-xs text-white border border-red-300 bg-red-500">
        -50%
      </div>
    </div>
  );
}

export default Card;
