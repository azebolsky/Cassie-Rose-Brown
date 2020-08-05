import React, { useState } from "react";
// import Sidenav from "../Components/Sidenav/Sidenav";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Resume from "../Components/resume/Resume";
import Recipes from "../Components/recipes/Recipes";
import Contact from "../Components/contact/Contact";
import Footer from "../Components/footer/Footer";
import Hamburger from "../Components/hamburger/Hamburger";
import SideDrawer from "../Components/sidedrawer/SideDrawer";
import "./App.css";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState({
    sideDrawerOpen: false,
  });

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const drawerCloseClickHandler = () => {
    setSideDrawerOpen({ sideDrawerOpen: false });
  };

  // let sideDrawerStatus;
  // if (sideDrawerOpen.sideDrawerOpen) {
  //   sideDrawerStatus = <SideDrawer />;
  // }

  return (
    <div className={sideDrawerOpen.sideDrawerOpen ? "App" : ""}>
      {/* <Sidenav /> */}
      <SideDrawer show={sideDrawerOpen.sideDrawerOpen} />
      {/* {sideDrawerStatus} */}
      <main className={sideDrawerOpen.sideDrawerOpen ? "total-width" : ""}>
        <Hamburger drawerToggleClickHandler={drawerToggleClickHandler} />
        <Home title="home" dark={true} id="home" />
        <About title="about" dark={true} id="about" />
        <Resume title="resume" dark={true} id="resume" />
        <Recipes title="recipe" dark={true} id="recipes" />
        <Contact
          title="contact"
          dark={true}
          id="contact"
          backToTop={handleButtonClick}
        />
        <Footer />
      </main>
    </div>
  );
}

export default App;
