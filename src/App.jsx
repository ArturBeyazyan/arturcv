import { useEffect, useState } from 'react';
import './App.scss';
import { NavBar } from './pages/NavBar/NavBar'
import { Main } from './pages/Main/Main'
import { Loader } from './components/Loader/Loader'
function App() {
  const [active,setActiive]=useState(1)
  const [isLoading, setIsLoading] = useState(true);
  const activeList=(index)=>{setActiive(index);}
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
      <>
     { isLoading ?<Loader /> : 
       <><NavBar active={active} activeList={activeList} />
        <Main active={active} activeList={activeList} />
     </> }
    </>
    </div>
  );
}

export default App;
