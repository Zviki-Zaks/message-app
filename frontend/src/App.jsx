
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/global.scss';
import { AppHeader } from './components/AppHeader/AppHeader';
import { AuthRoute } from './components/common/AuthRoute/AuthRoute';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { UsersPage } from './pages/UsersPage/UsersPage';

function App() {

  const { loggedInUser } = useSelector(state => state.userModule)

  return (
    <div className="App">
      <AppHeader />
      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<AuthRoute condition={!!loggedInUser} redirect={'/login'} />}>
            <Route path='/users' element={<UsersPage />} />
            <Route path='/chat' element={<ChatPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
