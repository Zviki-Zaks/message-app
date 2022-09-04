
import { Route, Routes } from 'react-router-dom';
import './assets/scss/global.scss';
import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { socketService } from './services/socketService';

function App() {
  // socketService.setup()

  // socketService.on('connected', (data) => {
  //   console.log(data)
  //   console.log('connected')
  // })
  return (
    <div className="App">
      <AppHeader />
      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<UsersPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
