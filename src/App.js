import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactBootstrap from "./Component/ReactBootstrap/ReactBootstrap";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formic from "./Component/Formic/Formic";
import Basic from "./Component/Basic";
import MuiLoginPage from "./Component/MuiLoginPage/MuiLoginPage";

function App() {
  return (
    <div>
    <Container className="p-0 m-0" fluid >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Formic/>} />
    <Route path='/MuiLoginPage' element={<MuiLoginPage/>} />
    <Route path='/Basic' element={<Basic/>} />
    <Route path='/ReactBootstrap' element={<ReactBootstrap/>} />
    </Routes>
    </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
