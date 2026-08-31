import heroBanner from '../../../assets/heroBanner/Gemini_Generated_Image_v24sc5v24sc5v24s.jpg';
import heroBannerSolid from '../../../assets/heroBanner/Gemini_Generated_Image_v24sc5v24sc5v24s.png';
import CategoryDemo from '../../../assets/banner/imgi_478_6c6c6b22-500d-4620-be4d-d26cf7932599.webp';
// import HeroVideo from '../../../assets/video/heroVideo.mp4';
// import Brand from '../../../components/layout/Brand';
import collectionBanner from '../../../assets/collection/anua-banner.webp';
import collection2 from '../../../assets/collection/MainBanner_PC_07_2.webp';
import collection3 from '../../../assets/collection/ImageSlider3.png';
import collection4 from '../../../assets/collection/weyoungbanner.jpg';
import Kova from '../../../assets/promotion/Minimal Luxury Skincare Packaging Design ✨.jpg';
import Byoma from '../../../assets/promotion/download (29).jpg';
import Kahf from '../../../assets/promotion/Best Product Poster Design - Kahf Advertising Poster Concept🤩.jpg';
import Card from '../../../components/products/Card';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// const Promotion = () => {
//   const sectionRef = useRef(null);
//   const [isStuck, setIsStuck] = useState(true);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const handleScroll = () => {
//       const { bottom } = section.geotBoundingClientRect();
//       setIsStuck(bottom > window.innerHeight);
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const pos = isStuck ? 'fixed' : 'absolute';

//   return (
//     <section
//       ref={sectionRef}
//       className="relative z-0 w-screen h-screen mt-12 flex justify-center items-center overflow-hidden"
//     >
//       <img
//         className="absolute z-20 h-full w-full object-cover"
//         src={heroBannerSolid}
//       />
//       <img className="h-full w-full object-cover" src={heroBanner} />

//       <h1
//         className={`${pos} z-10 top-32 text-[240px] font-medium uppercase text-white tracking-tighter leading-[1] whitespace-nowrap`}
//       >
//         weyoung
//       </h1>

//       <div
//         className={`${pos} w-[280px] z-20 left-20 top-8/12 flex flex-col justify-center gap-5`}
//       >
//         <h1 className="capitalize text-4xl text-white text-balance">
//           Your journey to better health starts here!
//         </h1>
//         <Link
//           to="/"
//           className="uppercase w-max px-5 h-12 rounded-full leading-[1] bg-taupe-500 text-white flex justify-center items-center"
//         >
//           Explore products
//         </Link>
//       </div>

//       <p
//         className={`${pos} z-20 text-lg w-[460px] text-white right-16 top-8/12 text-pretty text-center`}
//       >
//         Discover plants-based supplements that enhance energy, immunity and
//         overall wellness with reliable ingredients.
//       </p>
//     </section>
//   );
// };

function Store() {
  return (
    <div className="w-screen flex flex-col gap-10 px-2.5 my-10">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="uppercase text-4xl font-semibold text-gray-800">
            Browse by store
          </h1>
          <p className="text-lg text-gray-500">Swape to epxlore more</p>
        </div>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/brands"
        >
          See more brands
        </Link>
      </div>
      <div className="w-full flex items-center gap-5">
        <div className="relative w-[350px] h-[500px] rounded-[30px] overflow-hidden">
          <img className="w-full h-full object-cover" src={CategoryDemo} />
          <div className="absolute z-10 top-2.5 left-2.5 px-2.5 py-1 flex justify-center items-center bg-white border border-gray-300 rounded-full">
            <span className="text-xs text-black">Weyoung</span>
          </div>
          <Link
            className="absolute right-2.5 top-2.5 h-10 w-10 rounded-full flex justify-center items-center overflow-hidden bg-white border border-gray-300"
            to="/"
          >
            <ExternalLink size={20} color="black" />
          </Link>
          <div className="absolute z-10 inset-x-2.5 bottom-2.5 flex flex-col gap-1 bg-white rounded-[20px] p-2.5">
            <h1 className="text-lg font-medium text-black leading-[1.1]">
              Weyoung
            </h1>
            <p className="text-sm text-gray-600">20 products available</p>
            <Link
              to="/"
              className="absolute top-2.5 right-2.5 h-8 w-8 rounded-full flex justify-center items-center bg-white border border-gray-300"
            >
              <ExternalLink size={16} color="black" />
            </Link>
          </div>
        </div>
        <div className="relative w-[350px] h-[500px] rounded-[30px] overflow-hidden">
          <img className="w-full h-full object-cover" src={CategoryDemo} />
          <div className="absolute z-10 top-2.5 left-2.5 px-2.5 py-1 flex justify-center items-center bg-white border border-gray-300 rounded-full">
            <span className="text-xs text-black">Weyoung</span>
          </div>
          <Link
            className="absolute right-2.5 top-2.5 h-10 w-10 rounded-full flex justify-center items-center overflow-hidden bg-white border border-gray-300"
            to="/"
          >
            <ExternalLink size={20} color="black" />
          </Link>
          <div className="absolute z-10 inset-x-2.5 bottom-2.5 flex flex-col gap-1 bg-white rounded-[20px] p-2.5">
            <h1 className="text-lg font-medium text-black leading-[1.1]">
              Weyoung
            </h1>
            <p className="text-sm text-gray-600">20 products available</p>
            <Link
              to="/"
              className="absolute top-2.5 right-2.5 h-8 w-8 rounded-full flex justify-center items-center bg-white border border-gray-300"
            >
              <ExternalLink size={16} color="black" />
            </Link>
          </div>
        </div>
        <div className="relative w-[350px] h-[500px] rounded-[30px] overflow-hidden">
          <img className="w-full h-full object-cover" src={CategoryDemo} />
          <div className="absolute z-10 top-2.5 left-2.5 px-2.5 py-1 flex justify-center items-center bg-white border border-gray-300 rounded-full">
            <span className="text-xs text-black">Weyoung</span>
          </div>
          <Link
            className="absolute right-2.5 top-2.5 h-10 w-10 rounded-full flex justify-center items-center overflow-hidden bg-white border border-gray-300"
            to="/"
          >
            <ExternalLink size={20} color="black" />
          </Link>
          <div className="absolute z-10 inset-x-2.5 bottom-2.5 flex flex-col gap-1 bg-white rounded-[20px] p-2.5">
            <h1 className="text-lg font-medium text-black leading-[1.1]">
              Weyoung
            </h1>
            <p className="text-sm text-gray-600">20 products available</p>
            <Link
              to="/"
              className="absolute top-2.5 right-2.5 h-8 w-8 rounded-full flex justify-center items-center bg-white border border-gray-300"
            >
              <ExternalLink size={16} color="black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-0 w-screen h-screen mt-12 flex justify-center items-center overflow-hidden">
      <img
        className="absolute z-20 h-full w-full object-cover"
        src={heroBannerSolid}
      />
      <img className="h-full w-full object-cover" src={heroBanner} />
      {/* <video
        className="h-full w-full object-cover"
        playsInline
        autoPlay
        loop
        muted
        src={HeroVideo}
      ></video> */}
      {/* <video
        className="absolute z-20 h-full w-full object-cover"
        playsInline
        autoPlay
        loop
        muted
        src={HeroVideoTransparent}
      ></video> */}
      <h1 className="absolute z-10 top-22 text-[240px] font-medium uppercase text-white tracking-tighter leading-[1] whitespace-nowrap">
        weyoung
      </h1>
      <div className="absolute w-[280px] z-10 left-20 top-7/12 flex flex-col justify-center gap-5">
        <h1 className="capitalize text-4xl text-white text-balance">
          Yuor journey to better health start here!
        </h1>
        <Link
          to="/"
          className="uppercase w-max px-5 h-12 rounded-full leading-[1] bg-taupe-500 text-white flex justify-center items-center"
        >
          Explore products
        </Link>
      </div>
      <p className="absolute z-10 text-lg w-[460px] text-white right-16 top-7/12 text-pretty text-center">
        Discover plants-based supplements that enhance energy, Immurity and
        overall wellness with reliable ingrediant.
      </p>
    </section>
  );
}
function NewArrival() {
  return (
    <div className="w-screen flex flex-col px-2.5 gap-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-4xl font-semibold text-gray-800">
          New Arrivals
        </h1>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/shopall"
        >
          All products
        </Link>
      </div>
      <div className="w-full bg-white z-10 grid grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
function BestSeller() {
  return (
    <div className="w-screen flex flex-col px-2.5 gap-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-4xl font-semibold text-gray-800">
          Best Seller
        </h1>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/shopall"
        >
          All products
        </Link>
      </div>
      <div className="w-full bg-white z-10 grid grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
function UltimateSaving() {
  return (
    <div className="w-screen flex flex-col px-2.5 gap-10 mt-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-4xl font-semibold text-gray-800">
          Ultimate Saving
        </h1>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/shopall"
        >
          All products
        </Link>
      </div>
      <div className="w-full bg-white z-10 grid grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
function Collection() {
  const collection = [
    {
      id: 1,
      src: collectionBanner,
      link: '/',
    },
    {
      id: 2,
      src: collection2,
      link: '/',
    },
    {
      id: 3,
      src: collection3,
      link: '/',
    },
    {
      id: 4,
      src: collection4,
      link: '/',
    },
  ];

  const [isSlide, setIsSlide] = useState(0);
  const getLen = collection.length * 100 - 100;
  return (
    <div className="w-screen flex flex-col gap-10 my-10 px-2.5">
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-4xl font-semibold text-gray-800">
          All Collection New In
        </h1>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/shopall"
        >
          All products
        </Link>
      </div>
      <div className="relative w-full flex items-center">
        <div
          style={{ translate: `-${isSlide}vw 0` }}
          className="w-max h-[520px] flex items-center transition duration-500 ease-[cubic-bezier(0.85, 0.01, 0.14, 0.98)]"
        >
          {collection.map((ele) => {
            return (
              <Link
                key={ele.id}
                to={ele.link}
                className="w-screen h-full flex justify-center items-center"
              >
                <img
                  className="w-[85%] h-full object-cover rounded-[50px]"
                  src={ele.src}
                />
              </Link>
            );
          })}
        </div>
        <button
          onClick={() =>
            setIsSlide((isSlide) => (isSlide === 0 ? isSlide : isSlide - 100))
          }
          className={`cursor-pointer absolute left-5 z-10 h-10 w-10 rounded-full flex justify-center items-center bg-black/40 transition duration-500 ${isSlide === 0 ? `opacity-0` : 'opacity-100'}`}
        >
          <ChevronLeft
            size={24}
            color="white
        "
          />
        </button>
        <button
          onClick={() =>
            setIsSlide((isSlide) =>
              isSlide === getLen ? isSlide : isSlide + 100,
            )
          }
          className={`cursor-pointer absolute right-5 z-10 h-10 w-10 rounded-full flex justify-center items-center bg-black/40 transition duration-500 ${isSlide === getLen ? `opacity-0` : 'opacity-100'}`}
        >
          <ChevronRight
            size={24}
            color="white
        "
          />
        </button>
      </div>
    </div>
  );
}

// update to grid
function Promotion() {
  return (
    <div className="w-screen my-10 gap-10 flex flex-col px-2.5">
      <div className="w-full flex justify-between items-center">
        <h1 className="uppercase text-4xl font-semibold text-gray-800">
          Mide year promotion
        </h1>
        <Link
          className="text-lg font-semibold text-black hover:underline"
          to="/promotion"
        >
          All products
        </Link>
      </div>
      {/* <div className="w-full flex items-center overflow-hidden">
        <div className="w-max flex items-center px-2.5 gap-2.5 overflow-scroll scrollbar-none">
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
          <img
            className="w-[calc(100%/4-10px/4)] rounded-3xl aspect-[3/4] object-cover"
            src={Kova}
          />
        </div>
      </div> */}
      <div className="w-full flex flex-col justify-center items-center bg-green-800/5 rounded-[70px] overflow-hidden">
        <div className="w-full grid grid-cols-3 gap-2.5 p-2.5">
          <div className="w-full flex flex-col gap-5">
            <Link className="w-full" to="/weyoung">
              <img
                className="w-full aspect-square object-cover rounded-l-[60px]"
                src={Kova}
              />
            </Link>
            <div className="w-full flex flex-col items-center gap-1">
              <p className="text-sm text-amber-600 py-1">Local brands</p>
              <h1 className="uppercase text-6xl font-bold text-green-800 tracking-[-5px]">
                Kova
              </h1>
              <h1 className="text-xl text-green-950 font-semibold text-center text-balance tracking-tight">
                Sey Hello To Our New Product With New Ingredient
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Link className="w-full" to="/weyoung">
              <img className="w-full aspect-square object-cover" src={Kahf} />
            </Link>
            <div className="w-full flex flex-col items-center gap-1">
              <p className="text-sm text-amber-600 py-1">Local brands</p>
              <h1 className="uppercase text-6xl font-bold text-green-800 tracking-[-5px]">
                Kahf
              </h1>
              <h1 className="text-xl text-green-950 font-semibold text-center text-balance tracking-tight">
                Never Choose Wrong Again Now Check This Out
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Link className="w-full" to="/weyoung">
              <img
                className="w-full aspect-square object-cover rounded-r-[60px]"
                src={Byoma}
              />
            </Link>
            <div className="w-full flex flex-col items-center gap-1">
              <p className="text-sm text-amber-600 py-1">Local brands</p>
              <h1 className="uppercase text-6xl font-bold text-green-800 tracking-[-5px]">
                Byoma
              </h1>
              <h1 className="text-xl text-green-950 font-semibold text-center text-balance tracking-tight">
                Everything Is Now In One Collection With 3 Products
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function IndexPage() {
  return (
    <>
      <Hero />
      <Store />
      <NewArrival />
      <Collection />
      <BestSeller />
      <Promotion />
      <UltimateSaving />
    </>
  );
}
export default IndexPage;
