import {Outlet} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {AppContextProvider} from './contexts/AppContext/AppContextProvider';

export function App() {
  return (
    <div className="h-screen w-screen">
      <AppContextProvider>
        <Header />
        <Outlet />
      </AppContextProvider>
    </div>
  );
}
