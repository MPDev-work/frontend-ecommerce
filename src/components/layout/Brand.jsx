import { useState } from 'react';
import weyoung from '../../assets/brand/Group1.png';
import skin1004 from '../../assets/brand/Group2.png';
import phka from '../../assets/brand/Group3.png';
import medicube from '../../assets/brand/Group4.png';
import anua from '../../assets/brand/Group5.png';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const brands = [
  {
    id: 1,
    name: 'Weyoung',
    src: weyoung,
    link: '/weyoung',
  },
  {
    id: 2,
    name: 'skin1004',
    src: skin1004,
    link: '/skin1004',
  },
  {
    id: 3,
    name: 'phka',
    src: phka,
    link: '/phka',
  },
  {
    id: 4,
    name: 'medicube',
    src: medicube,
    link: '/medicube',
  },
  {
    id: 5,
    name: 'anua',
    src: anua,
    link: '/anua',
  },
  {
    id: 1,
    name: 'Weyoung',
    src: weyoung,
    link: '/weyoung',
  },
  {
    id: 2,
    name: 'skin1004',
    src: skin1004,
    link: '/skin1004',
  },
  {
    id: 3,
    name: 'phka',
    src: phka,
    link: '/phka',
  },
  {
    id: 4,
    name: 'medicube',
    src: medicube,
    link: '/medicube',
  },
  {
    id: 5,
    name: 'anua',
    src: anua,
    link: '/anua',
  },
];

function Brand() {
  const [isNext, setIsNext] = useState(0);
  const move = isNext / 5;

  return (
    <div className="relative z-50 w-screen h-20 flex items-center overflow-hidden">
      <div
        id="brandWidth"
        style={{ translate: `-${isNext}px 0px` }}
        className={`absolute z-0 left-20 w-max h-16 flex items-center transition`}
      >
        {brands.map((brand) => {
          return (
            <Link to={brand.link}>
              <div className="w-[160px] h-[60px] rounded-2xl bg-white border border-gray-300 text-xl font-semibold text-black mr-14 flex justify-center items-center uppercase">
                {brand.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="absolute right-0 h-full w-30 flex items-center bg-white">
        <button
          onClick={() => setIsNext(move === 216 ? isNext : isNext + 216)}
          className={`cursor-pointer h-12 w-12 flex justify-center items-center rounded-full bg-black/20`}
        >
          <ChevronRight size={24} color="black" />
        </button>
      </div>
      <div className="absolute left-0 h-full w-18 bg-white flex items-center justify-end ">
        <button
          onClick={() => setIsNext(move === 0 ? isNext : isNext - 216)}
          className={`cursor-pointer h-12 w-12 flex justify-center items-center rounded-full bg-black/20`}
        >
          <ChevronLeft size={24} color="black" />
        </button>
      </div>
    </div>
  );
}

export default Brand;
