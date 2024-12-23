import { useEffect, useState } from 'react';
import './App.scss';
import { Main } from './pages/Main/Main';
import { Loader } from './components/Loader/Loader';
import { Errors } from './components/404Error/Errors';
function App() {
  const [isLoading, setIsLoading] = useState(true);

   // Ստեղծում ենք թույլատրելի ուղիների ցուցակ
   const validPaths = ['/arturcv', '/about','/resume','/portfolio', '/contact'];  // Օրինակ

   // Ստուգում ենք текущие URL-ը
   const currentPath = window.location.pathname;
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
      {/* { isLoading ? <Loader /> :
        <>
          <Main/>
        </>
      }  */}



      {isLoading ? (
        <Loader />
      ) : (
        // Եթե URL-ը սխալ է, ցուցադրում ենք 404 էջը
        validPaths.includes(currentPath) ? (
          <Main />
        ) : (
          <Errors />  // 404 էջը սխալ ուղղությունների համար
        )
      )}
    </div>
  );
}
export default App;
