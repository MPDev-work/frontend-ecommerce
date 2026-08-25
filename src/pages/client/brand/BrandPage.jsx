import weyoungLogo from '../../../assets/banner/imgi_444_373a4020-4af0-4ea7-a83d-a125584df94f.webp';
import weyoungBanner from '../../../assets/banner/imgi_441_a8ba00fc-456e-4282-9b0a-fa3036f2ac8c.webp';
import BlueTick from '../../../assets/common/blue-checkmark-validation-social-media-png.png';
import Card from '../../../components/products/Card';

function Weyoug() {
  const storeInformation = {
    id: 'STORE0004',
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
  //   const getDiscountPrice = (discountPercent, fullPrice) => {
  //     let DiscountPrice = fullPrice - (fullPrice * discountPercent) / 100;
  //     return DiscountPrice.toFixed(2);
  //   };
  //   const ProductCount = getPhka.length;
  //   const getDeliveryStatus = (deliveryStatus) => {
  //     if (deliveryStatus === true) {
  //       return (
  //         <p className="text-[10px] text-amber-300 px-1 bg-green-700 rounded-tr-sm">
  //           Free <span className="text-white">Delivery</span>
  //         </p>
  //       );
  //     } else {
  //       return;
  //     }
  //   };

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
      {/* banner */}
      <img
        className="absolute z-[1] top-12 w-screen h-[350px] object-cover"
        src={weyoungBanner}
      />
      {/* new arrivals section */}
      <section className="relative z-10 w-screen flex flex-col items-center gap-8 px-5 mt-80 mb-20">
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
        <div className="w-full grid grid-cols-4 gap-y-10 gap-x-5 justify-items-stretch items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div> */}
      </section>
    </>
  );
}

function BrandPage() {
  return (
    <>
      <Weyoug />
    </>
  );
}

export default BrandPage;
