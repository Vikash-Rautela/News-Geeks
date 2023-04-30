// import "./App.css";
import React, { Component } from "react";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";
import News from "./Components/News";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BrowserRouter>
            <NavBar1 />
            <NavBar2 />

            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <Routes>
                    <Route
                      path="/"
                      element={<News key="general" category="general" />}
                    />
                    <Route
                      path="/Entertainment"
                      element={
                        <News key="entertainment" category="entertainment" />
                      }
                    />
                    <Route
                      path="/Technology"
                      element={<News key="technology" category="technology" />}
                    />
                    <Route
                      path="/Sports"
                      element={<News key="sports" category="sports" />}
                    />
                    <Route
                      path="/Business"
                      element={<News key="business" category="business" />}
                    />
                    <Route
                      path="/Health"
                      element={<News key="health" category="health" />}
                    />
                    <Route
                      path="/Science"
                      element={<News key="science" category="science" />}
                    />
                  </Routes>
                </div>
                <div className="col-md-4 ">
                  <SideBar />
                </div>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
