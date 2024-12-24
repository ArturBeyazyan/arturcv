import { useEffect, useState } from 'react';
import './App.scss';
// import { Errors } from './components/404Error/Errors';
import { Loader } from './components/Loader/Loader';
import { Main } from './pages/Main/Main';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  //  const validPaths = ['/arturcv', '/about','/resume','/portfolio', '/contact'];
  //  const currentPath = window.location.pathname;
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    };
    fakeDataFetch();
  }, []);
  return (
    <div className="App">

      {isLoading ? <Loader /> :  (<Main />)}
    </div>
  );
}
export default App;
