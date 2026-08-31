import AppRoute from './routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import FooterBar from './components/layout/FooterBar';
import ScrollToTop from './routes/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <AppRoute />
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
