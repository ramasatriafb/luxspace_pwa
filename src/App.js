import React from 'react';
import Arrived from './components/Arrived';
import AsideMenu from './components/AsideMenu';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function(){
    (async function(){
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc',{
        headers:{
          "Content-Type" : "application/json",
          "accept" : "application/json",
          "x-api-key" : process.env.REACT_APP_APIKEY
        }
      });
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  },[]);
  return (
  //  <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
  //    <div className="ml-6 pt-1">
  //      <h1 className="text-2xl text-blue-700 leading-tight">
  //       Tailwind and Create React App
  //      </h1>
  //      <p className="text-base text-gray-700 leading-normal">
  //        Building apps together
  //      </p>
  //    </div>
  //  </div>
  <>
  <Header/>
  <Hero />
  <Browse />
  <Arrived items={items}/>
  <Clients />
  <AsideMenu />
  <Footer />
  </>
  );
}

export default App;
