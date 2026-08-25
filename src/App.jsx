import AppRoute from './routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
