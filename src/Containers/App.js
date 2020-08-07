import React, { useState } from "react";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Resume from "../Components/resume/Resume";
import Recipes from "../Components/recipes/Recipes";
import Contact from "../Components/contact/Contact";
import Footer from "../Components/footer/Footer";
import Hamburger from "../Components/hamburger/Hamburger";
import SideDrawer from "../Components/sidedrawer/SideDrawer";
import Backdrop from "../Components/Backdrop/Backdrop";
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

  const backdropClickHandler = () => {
    setSideDrawerOpen({ sideDrawerOpen: false });
  };

  // let sideDrawerStatus;
  // if (sideDrawerOpen.sideDrawerOpen) {
  //   sideDrawerStatus = <SideDrawer />;
  // }

  return (
    <div className="App">
      {/* <SideDrawer show={sideDrawerOpen.sideDrawerOpen} /> */}
      <SideDrawer />
      {/* <Backdrop
        show={sideDrawerOpen.sideDrawerOpen}
        click={backdropClickHandler}
      /> */}
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
