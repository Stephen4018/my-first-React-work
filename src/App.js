//import logo from './logo.svg';
import './App.scss';
import Navbar from './component/Navbar';
// import NavComp from './component/Nav';
import Home from './component/pages/home';
import Contact from './component/pages/contact';
import Services from './component/pages/services';
import Products from './component/pages/products';
import { Routes, Route} from "react-router-dom";
import ErrorPage from './component/pages/error';
import GridComp from './component/GridComp';
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

// import { DivComp } from './component/Comp';
// import { SpanComp } from './component/Comp';
// import { FullComp } from './component/Comp';
// import { WelcomeText } from './component/Comp';

function App() {
  return (
    <div className='App'>
      {/* <GridComp /> */}
     {/* <BoxComp /> */}
     { <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
          </Routes>
     </div> }
    </div>
  );
}

export default App;
