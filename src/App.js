//import logo from './logo.svg';
import './App.scss';
import './signUp.scss';
import './login.scss';
import BlogDetails from './component/pages/blogDetails';
import BlogComp from './component/pages/blogComp';
import Navbar from './component/Navbar';
// import NavComp from './component/Nav';
import Home from './component/pages/home';
import Contact from './component/pages/contact';
import Services from './component/pages/services';
import Products from './component/pages/products';
import { Routes, Route} from "react-router-dom";
import ErrorPage from './component/pages/error';
import { SingleProduct } from './component/pages/singleProduct';
import GridComp from './component/GridComp';
import {Login} from './component/pages/login';
import {SignUp} from './component/pages/signUp';
import FetchBox from './component/FetchBox';
import FirstForm from './component/pages/firstForm';
import UpdateForm from './component/pages/updateForm';
// import BoxComp from './component/Box';
// import { HeaderComp } from './component/Comp';
// import { BodyComp } from './component/Comp';
// import { FooterComp } from './component/Comp';
// import { ParentComp } from   './component/Comp';
// import BoxComp from './component/Box';
// import Button from "./component/Button";
// import Nav from "./component/Nav"; 
// import NavComp from './component/Nav';
// import ButtonComp from './component/Button';


function App() {
  return (
    <div className='App'>
   
   {/* <BlogComp /> */}
      {/* <BlogDetails />   */}
       
     
{/*      
     <div>
      <Routes>
        <Route path="/blogComp" element={<BlogComp />} />
        <Route path="blogComp/:BlogId" element={<BlogDetails />} />
        <Route path="firstForm" element={<FirstForm />} />
        <Route path="updateForm" element={<UpdateForm />} />
        </Routes>
     </div> */}
      {/* <GridComp /> */}
     {/* <BoxComp /> */}
     { <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
          </Routes>
          
     </div> }
    </div>
  );
}

export default App;
