import {BrowserRouter , Routes , Route} from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';
import styled from 'styled-components';
import Home from './Pages/Home';
import UserList from './Pages/UserList';
import User from './Pages/User/User';
import Newuser from './Pages/NewUser/Newuser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
import { useState } from 'react';
import { Context } from './Context';

const Container = styled.div`
 max-width : 100%;
 display : flex;
 padding-right : clamp(2px , 2vw , 15px);
`

function App() {
  const [product , setProduct] = useState();
  const [user , setUser] = useState();
  const [open , setOpen] = useState(false)

  return (
   <BrowserRouter>
   <Context.Provider value={{open , setOpen , user , setUser , product, setProduct}}>
    <TopBar/>
    <Container>
    <SideBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/user' element={<UserList/>}/>
    <Route path='/user/:userId' element={<User/>}/>
    <Route path='/newUser' element={<Newuser/>} />
    <Route path='/products' element={<ProductList/>} />
    <Route path='/products/:productId' element={<Product/>} />
    <Route path='/new-product' element={<NewProduct/>} />
    </Routes>
    </Container>
    </Context.Provider>
  </BrowserRouter> 
    )
}

export default App;
