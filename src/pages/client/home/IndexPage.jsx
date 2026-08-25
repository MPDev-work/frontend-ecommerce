// import Skin1004banner from '../../../assets/banner/Anua-Banner-Mobile-2.webp';
import WeyoungBanner from '../../../assets/banner/imgi_441_a8ba00fc-456e-4282-9b0a-fa3036f2ac8c.webp';
import Brand from '../../../components/layout/Brand';

function Promotion() {
  return (
    <section className="relative w-screen h-[420px] mt-12 overflow-hidden">
      <img className="h-full w-full object-cover" src={WeyoungBanner} />
    </section>
  );
}

// function Testing() {
//   return (
//     <div className="w-full grid grid-cols-4 gap-5 p-2.5">
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }
function IndexPage() {
  return (
    <>
      <Promotion />
      <Brand />
    </>
  );
}
export default IndexPage;
