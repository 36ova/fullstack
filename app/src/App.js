import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewWordlist } from "./components/NewWordlist";
import { AllWordlists } from "./components/AllWordlists";
import { ViewWordlist } from "./components/ViewWordlist";
import { RandomWordlist } from "./components/RandomWordlist";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Header } from "./components/Header";
import { Main } from "./components/Main";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Main />}></Route>
        <Route path="/view" element={<ViewWordlist />}></Route>
        <Route path="/wordlists" element={<AllWordlists />}></Route>
        <Route path="/new" element={<NewWordlist />}></Route>
        <Route path="/random" element={<RandomWordlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}