import DemoSrc from '../../../assets/banner/imgi_448_ef898d84-a5a8-4ba4-9184-7389fc4082e7.webp';
import StoreLogo from '../../../assets/banner/imgi_441_a8ba00fc-456e-4282-9b0a-fa3036f2ac8c.webp';
import srcDemon from '../../../assets/banner/imgi_472_9dce51e6-9364-4cd8-98ef-940a685ed4f5.webp';
import Card from '../../../components/products/Card';
import { useState } from 'react';
import { Handbag, Heart } from 'lucide-react';

const product = {
  id: 1,
  title: 'Weyoung Catton pad',
  src: srcDemon,
  price: 12.99,
  disc: 20,
  stock: 10,
  size: [100, 300, 400],
  skintype: ['normal', 'oily', 'dry'],
  storename: 'weyoung',
  freedelivery: true,
};

function Details() {
  const [skinType, setSkinType] = useState(product.skintype.at(0));
  const [isSize, setIsSize] = useState(product.size.at(0));
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(false);

  const priceAfterDisc = (price, disc) => price - (price * disc) / 100;
  return (
    <>
      <div className="w-screen h-[calc(100dvh-48px)] grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white mt-12">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[90%] h-[90%] object-cover rounded-4xl"
            src={DemoSrc}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={StoreLogo} />
            </div>
            <span className="capitalize text-lg font-medium text-black">
              {product.storename}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <h1 className="text-black text-4xl font-semibold">
              ${priceAfterDisc(product.price, product.disc).toFixed(2)} USD
            </h1>
            <div className="flex gap-2">
              <h1 className="text-red-500 text-4xl font-medium">
                {product.disc}%
              </h1>
              <span className="text-2xl text-red-500">OFF</span>
            </div>
            <h1 className="text-xl font-medium text-gray-600 line-through">
              ${product.price} USD
            </h1>
          </div>
          <h1 className="uppercase text-xl font-semibold text-black">
            {product.title}
          </h1>
          <div className="flex items-center gap-2 mt-8">
            <h1 className="text-2xl font-bold text-black">Size</h1>
            <span className="text-sm text-gray-400">( ml )</span>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {product.size.map((type) => {
              return (
                <Selection
                  key={type}
                  type={type}
                  isSelect={isSize}
                  setIsSelect={setIsSize}
                />
              );
            })}
          </div>
          <h1 className="text-2xl font-bold text-black">Skin type</h1>
          <div className="w-full flex flex-wrap gap-2">
            {product.skintype.map((type) => {
              return (
                <Selection
                  key={type}
                  type={type}
                  isSelect={skinType}
                  setIsSelect={setSkinType}
                />
              );
            })}
          </div>
          <h1 className="text-2xl font-bold">Quantity</h1>
          <div className="w-max flex items-center gap-1">
            <button
              style={{ cursor: qty == 1 ? 'not-allowed' : 'pointer' }}
              onClick={() => setQty(qty >= 2 ? qty - 1 : qty)}
              className="cursor-pointer h-12 w-12 rounded-l-full flex justify-center items-center text-xl bg-[#f2f2f6] transition duration-150 active:bg-grau-200"
            >
              -
            </button>
            <div className="w-[67px] h-12 flex justify-center items-center bg-[#f2f2f6]">
              {qty}
            </div>
            <button
              style={{
                cursor: qty == product.stock ? 'not-allowed' : 'pointer',
              }}
              onClick={() => setQty(qty == product.stock ? qty : qty + 1)}
              className="cursor-pointer h-12 w-12 rounded-r-full flex justify-center items-center text-xl bg-[#f2f2f6] transition duration-150 active:bg-grau-200"
            >
              +
            </button>
          </div>
          <div className="w-full flex items-center gap-2.5 mt-2.5">
            <button
              className={`h-12 w-[360px] rounded-full flex justify-center items-center gap-2 ${product.stock === 0 ? `bg-gray-300 cursor-not-allowed text-gray-500` : `bg-black text-white cursor-pointer`}`}
            >
              <Handbag
                size={20}
                color="white"
                className={`${product.stock === 0 ? `hidden` : `block`}`}
              />
              {product.stock === 0 ? `Product out of stock` : ` Add to bag`}
            </button>
            <button
              onClick={() => setActive((active) => !active)}
              className={`cursor-pointer h-12 w-12 rounded-full flex justify-center items-center border ${active === true ? `bg-black border-black` : 'bg-white border-gray-300'}`}
            >
              <Heart
                size={20}
                fill={`${
                  active === true
                    ? `white`
                    : `transparent
                `
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col px-2.5 my-10">
        <div className="relative w-full flex items-center">
          <hr className="w-full border-t border-dashed border-gray-300 " />
          <h1 className="absolute left-20 z-10 uppercase text-3xl font-semibold text-gray-500 px-1 bg-white">
            similar items
          </h1>
        </div>
        <div className="w-full grid grid-cols-4 gap-5 mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

function Selection({ type, isSelect, setIsSelect }) {
  return (
    <div
      onClick={() => setIsSelect(type)}
      // style={{
      //   background: isSelect === type ? 'black' : 'white',
      //   color: isSelect === type ? 'white' : 'black',
      // }}
      className={`capitalizes cursor-pointer h-10 px-5 border text-sm flex justify-center items-center ${isSelect === type ? `bg-black text-white  border-black` : `bg-white text-black border-gray-300 `}`}
    >
      {type}
    </div>
  );
}

export default Details;
