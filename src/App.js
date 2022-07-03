import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Services from './Pages/Services/Services';
import Navbar from './Pages/Shared/Navbar';
 

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>

     <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/services' element={<Services></Services>}></Route>
<Route path='/products' element={<Products></Products>}></Route>
<Route path='/blog' element={<Blog></Blog>}></Route>
     </Routes>
    </div>
  );
}

export default App;
