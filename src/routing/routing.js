import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Choose from "../choose/choose";
import CustomizedDialogs from "../dialog/dialog";
import Footer from "../footer/footer";
import Nav from "../nav/nav";
import CustomizedAccordions from "../dialog/accordin";
import { Provider } from "react-redux";
import { stores } from "../store/store";
import List from "../table/table";

import Table from "../table/table";
 
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
           
            <Nav></Nav>
              <Routes>
                <Route  path={"/"} element={<Choose />}></Route>
                
                <Route path={"footer"} element={<Footer />}></Route>
                <Route path={"choose"} element={<Choose />}></Route>
                <Route path={"/list"} element={<List />}></Route>
              </Routes>
            </BrowserRouter>
        </div>
    )

}

const Main = () =>{
  return(
    <Provider store={stores}>
      <Routing/>
    </Provider>
  )
}
export default Main;