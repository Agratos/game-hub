import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLayout from './layouts/AppLayoout/Layout.jsx/AppLayout';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DetailPage from './pages/DetailPage/DetailPage';
import SearchPage from './pages/SearchPage/SearchPage';
import TopGamePage from './pages/TopGamePage/TopGamePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HeaderLayout from './layouts/AppLayoout/HeaderLayout/HeaderLayout';
import MyPage from './pages/MyPage/MyPage';

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='top-game' element={<TopGamePage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='my-page' element={<MyPage />} />
        </Route>
        <Route element={<HeaderLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/top-game' element={<TopGamePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
