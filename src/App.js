import logo from './logo.svg';
import './App.css';
import { HeaderComp } from './component/Comp';
import { BodyComp } from './component/Comp';
import { FooterComp } from './component/Comp';
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
    
    <HeaderComp/>
    <BodyComp/>
    <FooterComp/>
    {/* <NavComp />
    <ButtonComp />
    <DivComp/>
    <SpanComp/>
    <FullComp/>
    <WelcomeText text = "chiemela"/>
    <WelcomeText text = "Duff"/>
    <WelcomeText text = "stephen"/>  */}
    </div>
  );
}

export default App;
