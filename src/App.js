import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Order from './Order';
import Checkout from './Checkout';
import Product from './Product';
import Product_category from './Product_category'
import { useStateValue } from './StateProvider';
import Electronic from './Electronic';
import Clothing from './Clothing';
import Furniture from './Furniture';
import Beauty from './Beauty';
import Camera from './Camera';
import Phone from './Phone';
import Laptop from './Laptop';
import Man from './Man';
import Women from './Women';
import Kids from './Kids';
import Mattress from './Mattress';
import Beds from './Beds';
import Sofas from './Sofas';
import Skincare from './Skincare';
import Haircare from './Haircare';
import Makeup from './Makeup';
import AmazonminiTV from './AmazonminiTV';
// import { auth } from './firebase';

function App() {
  const [{ basket }, dispatch] = useStateValue();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   console.log("User is", user); // Move this line inside useEffect

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/Order' element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product_category' element={<Product_category />} />
          <Route path='/Electronic' element={<Electronic />} />
          <Route path='/Clothing' element={<Clothing/>} />
          <Route path='/Furniture' element={<Furniture/>} />
          <Route path='/Beauty' element={<Beauty/>} />
          <Route path='/Camera' element={<Camera/>} />
          <Route path='/Phone' element={<Phone/>} />
          <Route path='/Laptop' element={<Laptop/>} />
          <Route path='/Man' element={<Man/>} />
          <Route path='/Women' element={<Women/>} />
          <Route path='/Kids' element={<Kids/>} />
          <Route path='/Mattress' element={<Mattress/>} />
          <Route path='/Beds' element={<Beds/>} />
          <Route path='/Sofas' element={<Sofas/>} />
          <Route path='/Skincare' element={<Skincare/>} />
          <Route path='/Haircare' element={<Haircare/>} />
          <Route path='/Makeup' element={<Makeup/>} />
          <Route path='/AmazonminiTV' element={<AmazonminiTV/>} />
          
         
        </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
