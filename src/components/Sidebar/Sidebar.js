import Filters from "../Filters/Filters";
import SidebarCategorises from "../SidebarCategories/SidebarCategories";
import "./Sidebar.css";
import RightArrow from "../../assets/right.svg";
import LeftArrow from "../../assets/left.svg";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const sidebarDisplayToggleHandler = () => {
    setClicked(true);
    setSidebarOpen((previousState) => !previousState);
  }
  return (
    // <div className="col-auto">
    <>
      {sidebarOpen ? <Backdrop onClick={sidebarDisplayToggleHandler} /> : null}
      {/* <div className="sidebar" style={{ transform: sidebarOpen ? "translateX(0)" : (clicked && "translateX(calc(30px - 100%))") }}> */}
      <div className="sidebar" style={{ left: sidebarOpen ? "0" : (clicked && "-305px") }}>
        <div className="sidebar__content-container">
          <SidebarCategorises />
          <Filters />
        </div>
        <div className="sidebar__button-container d-block d-lg-none">
          <button onClick={sidebarDisplayToggleHandler} style={{ border: sidebarOpen && "none" }}><img src={sidebarOpen ? LeftArrow : RightArrow} alt="right" /></button>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Sidebar;
