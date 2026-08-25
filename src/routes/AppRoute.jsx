import { Routes, Route } from 'react-router-dom';
import IndexPage from '../pages/client/home/IndexPage';
import LoginPage from '../pages/auth/LoginPage';
import BrandPage from '../pages/client/brand/BrandPage';
import Explore from '../pages/client/product/Explore';
import ShopAll from '../pages/client/product/ShopAll';
import Promotion from '../pages/client/product/Promotion';

function AppRoute() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/brands" element={<BrandPage />} />
      <Route path="/shopall" element={<ShopAll />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default AppRoute;
