import { Link } from 'react-router-dom';

import Image from '../../assets/banner/imgi_448_ef898d84-a5a8-4ba4-9184-7389fc4082e7.webp';

function Card() {
  return (
    <Link
      to="/"
      className="relative flex flex-col items-center justify-center gap-2.5 overflow-hidden"
    >
      <img
        className="w-full aspect-square object-cover rounded-[18px]"
        src={Image}
      />
      <div className="w-full flex flex-col gap-2.5 pl-4">
        <h1 className="text-lg tracking-tighter truncate leading-[1.1]">
          Weyoung Cotton pad
        </h1>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-medium text-red-500 leading-[1]">
            $12.99 USD
          </h1>
        </div>
      </div>
      <div className="absolute z-10 p-[3px_8px] top-2 right-2 flex items-center justify-center rounded-full text-xs text-black border border-gray-300 bg-white">
        Weyoung
      </div>
    </Link>
  );
}

export default Card;
