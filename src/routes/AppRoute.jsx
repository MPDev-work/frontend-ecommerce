import { Routes, Route } from 'react-router-dom';
import IndexPage from '../pages/client/home/IndexPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import BrandPage from '../pages/client/brand/BrandPage';
import Explore from '../pages/client/product/Explore';
import ShopAll from '../pages/client/product/ShopAll';
import Promotion from '../pages/client/product/Promotion';
import BrandShowCase from '../pages/client/brand/SubBrand/BrandShowCase';
import Details from '../pages/client/details/Details';

function AppRoute() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/brands" element={<BrandPage />} />
      <Route path="/weyoung" element={<BrandShowCase />} />
      <Route path="/shopall" element={<ShopAll />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/detail" element={<Details />} />
    </Routes>
  );
}

export default AppRoute;
