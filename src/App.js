import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import AppContext from "./context.js";
import Orders from "./pages/Orders.jsx";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    async function fetchData() {
      const cartResponse = await axios.get('https://67b725f22bddacfb270ddfe9.mockapi.io/cart')
      const itemsResponse = await axios.get('https://67b725f22bddacfb270ddfe9.mockapi.io/items')
      
      setIsLoading(false)

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      
    // fetch('https://67b725f22bddacfb270ddfe9.mockapi.io/items')
    // .then((res) =>{
    //   return res.json();
    // })
    // .then((json)=>{
    //   setItems(json);
    // }); Через fetch();
    }
    fetchData();
  },[]);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://67b725f22bddacfb270ddfe9.mockapi.io/cart/${obj.id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://67b725f22bddacfb270ddfe9.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://67b725f22bddacfb270ddfe9.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  
  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find(favObj => (favObj.id) === obj.id)){
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
    } catch(error){
      alert('Не удалось добавить в избранное')
    }
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
      <div className="wrapper clear">
        {cartOpened ? <Drawer items={cartItems} onClose={() => {setCartOpened(false)}} onRemove={onRemoveItem} /> : null}
        
        <Header onClickCart={() => setCartOpened(true)}/>
        
        <Routes>
          <Route
              path="/"
              element={
                <Home
                  items={items}
                  cartItems={cartItems}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToFavorite={onAddToFavorite}
                  onAddToCart={onAddToCart}
                  isLoading={isLoading}
                />
              } exact/>

          <Route path="/favorites" element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
          } exact />

          <Route path="/orders" element={
            <Orders items={favorites} onAddToFavorite={onAddToFavorite}/>
          } exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
