import weyoungLogo from '../../../assets/banner/imgi_444_373a4020-4af0-4ea7-a83d-a125584df94f.webp';
import BlueTick from '../../../assets/common/blue-checkmark-validation-social-media-png.png';
import Card from '../../../components/products/Card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

function Weyoug() {
  const storeInformation = {
    id: 'STORE0004',
    name: 'weyoung',
    logo: weyoungLogo,
    followerCount: 240067,
    productCount: 97,
    storeVerified: true,
  };
  const storeCategory = [
    { id: 'CT01', category: 'Water Cleansing' },
    { id: 'CT02', category: 'Sun Screen' },
    { id: 'CT03', category: 'Serum' },
    { id: 'CT04', category: 'Make Up' },
    { id: 'CT05', category: 'Glowing' },
    { id: 'CT06', category: 'Female' },
    { id: 'CT07', category: 'Male' },
    { id: 'CT08', category: 'Korea' },
  ];
  // formart number
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
  };
  // const ProductCount = getPhka.length;

  const storeVerification = (verified) => {
    if (verified === true) {
      return (
        <img
          className="w-10 h-auto aspect-square object-cover rounded-full"
          src={BlueTick}
        />
      );
    } else {
      return;
    }
  };

  return (
    <>
      <section className="relative z-10 w-screen flex flex-col items-center gap-8 px-2.5">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start">
          <div
            id="brand-parent2"
            className="w-full flex flex-row justify-between items-start px-2.5 py-2.5 rounded-[30px] bg-white shadow-[0_5px_16px_#00000010]"
          >
            {/* left container */}
            <div className="relative w-full z-50 flex flex-row justify-start items-start">
              <div className="flex flex-row justify-start items-center gap-5">
                <img
                  className="w-[200px] aspect-square object-cover rounded-2xl"
                  src={storeInformation.logo}
                />
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl font-semibold uppercase tracking-tight ">
                      {storeInformation.name}
                    </p>
                    {/* store verify */}
                    {storeVerification(storeInformation.storeVerified)}
                  </div>
                  <p className="text-sm font-normal tracking-tight leading-5 text-gray-600">
                    Store ID : {storeInformation.id}
                  </p>
                  <p className="text-sm font-medium tracking-tight leading-5 text-green-700">
                    {formatCount(storeInformation.followerCount)} Follower -{' '}
                    {/* {formatCount(ProductCount)} Products */}
                  </p>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-xl font-medium leading-5 text-gray-700">
                      Store category 🛒
                    </p>
                    <div className="w-[450px] flex flex-row flex-wrap justify-start items-start gap-2">
                      {storeCategory.map((categorys) => {
                        return (
                          <div
                            key={categorys.id}
                            className="text-[10px] px-2.5 py-0.5 rounded-full  border-1 border-black text-black cursor-pointer"
                          >
                            {categorys.category}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right container */}
            <div className="flex flex-row justify-start items-start gap-2">
              <div className="h-10 px-8 flex justify-center items-center rounded-full bg-black text-white cursor-pointer">
                Follow
              </div>
              {/* <div className="h-10 px-4 flex justify-center items-center border-1 border-black rounded-full cursor-pointer">
                <i className="bi bi-heart text-black text-lg"></i>
              </div> */}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      </section>
    </>
  );
}
function Phka() {
  const storeInformation = {
    id: 'STORE0005',
    name: 'phka',
    logo: weyoungLogo,
    followerCount: 240067,
    productCount: 97,
    storeVerified: true,
  };
  const storeCategory = [
    { id: 'CT01', category: 'Water Cleansing' },
    { id: 'CT02', category: 'Sun Screen' },
    { id: 'CT03', category: 'Serum' },
    { id: 'CT04', category: 'Make Up' },
    { id: 'CT05', category: 'Glowing' },
    { id: 'CT06', category: 'Female' },
    { id: 'CT07', category: 'Male' },
    { id: 'CT08', category: 'Korea' },
  ];
  // formart number
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
  };
  // const ProductCount = getPhka.length;

  const storeVerification = (verified) => {
    if (verified === true) {
      return (
        <img
          className="w-10 h-auto aspect-square object-cover rounded-full"
          src={BlueTick}
        />
      );
    } else {
      return;
    }
  };

  return (
    <>
      <section className="relative z-10 w-screen flex flex-col items-center gap-8 px-2.5">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start">
          <div
            id="brand-parent2"
            className="w-full flex flex-row justify-between items-start p-2.5 rounded-[30px] bg-white shadow-[0_5px_16px_#00000010]"
          >
            {/* left container */}
            <div className="relative w-full z-50 flex flex-row justify-start items-start">
              <div className="flex flex-row justify-start items-center gap-5">
                <Link
                  to="/weyoung"
                  className="group relative w-[200px] h-[200px] rounded-[20px] overflow-hidden"
                >
                  <div className="absolute z-10 w-full h-full transition duration-200 flex justify-center items-center bg-transparent group-hover:bg-black/50">
                    <span className="group text-sm text-transparent transition duration-200 group-hover:text-white">
                      Click to view the store
                    </span>
                  </div>
                  <img
                    className="w-[200px] h-full object-cover"
                    src={storeInformation.logo}
                  />
                </Link>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl font-semibold uppercase tracking-tight ">
                      {storeInformation.name}
                    </p>
                    {/* store verify */}
                    {storeVerification(storeInformation.storeVerified)}
                  </div>
                  <p className="text-sm font-normal tracking-tight leading-5 text-gray-600">
                    Store ID : {storeInformation.id}
                  </p>
                  <p className="text-sm font-medium tracking-tight leading-5 text-green-700">
                    {formatCount(storeInformation.followerCount)} Follower -{' '}
                    {/* {formatCount(ProductCount)} Products */}
                  </p>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-xl font-medium leading-5 text-gray-700">
                      Store category 🛒
                    </p>
                    <div className="w-[450px] flex flex-row flex-wrap justify-start items-start gap-2">
                      {storeCategory.map((categorys) => {
                        return (
                          <div
                            key={categorys.id}
                            className="text-[10px] px-2.5 py-0.5 rounded-full  border-1 border-black text-black cursor-pointer"
                          >
                            {categorys.category}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right container */}
            <div className="flex flex-row justify-start items-start gap-2">
              <Link
                to="/weyoung"
                className="group h-10 w-10 rounded-full bg-white flex justify-center items-center border border-gray-300 text-white cursor-pointer whitespace-nowrap transition hover:bg-black"
              >
                <ExternalLink
                  size={20}
                  className="text-black group-hover:text-white transition"
                />
              </Link>
              <button className="h-10 px-8 flex justify-center items-center rounded-full bg-black text-white cursor-pointer whitespace-nowrap transition hover:bg-black/80">
                Follow
              </button>
              {/* <div className="h-10 px-4 flex justify-center items-center border-1 border-black rounded-full cursor-pointer">
                <i className="bi bi-heart text-black text-lg"></i>
              </div> */}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full h-[1px] my-[5px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      </section>
    </>
  );
}

function BrandPage() {
  return (
    <section className="w-screen flex flex-col bg-gray-50 pt-20">
      <Weyoug />
      <Phka />
    </section>
  );
}

export default BrandPage;
