import { useRef, useState } from 'react';
import Filters from '../Filters/Filters';
import SidebarCategorises from '../SidebarCategories/SidebarCategories';
import './Sidebar.css';
import RightArrow from '../../assets/right.svg';
import LeftArrow from '../../assets/left.svg';
import Backdrop from '../Backdrop/Backdrop';
import storesIcon from '../../assets/stores.svg';

function Sidebar({ categoriesArray }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ref = useRef();

  const sidebarDisplayToggleHandler = () => {
    setClicked(true);
    setSidebarOpen((previousState) => !previousState);
  };

  if (sidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const sidebaOpenHeight = window.innerWidth < 992 ? 'calc(954px + 42px)' : '954px';

  return (
    <>
      {sidebarOpen ? <Backdrop onClick={sidebarDisplayToggleHandler} /> : null}
      <div className="sidebar" ref={ref} style={{ left: sidebarOpen ? '0' : (clicked && `-${ref.current.clientWidth - 42}px`), height: sidebarOpen ? 'calc(100vh - 256px)' : sidebaOpenHeight }}>
        <div className="sidebar__content-container">
          <button className="store__btn" type="button">
            <img src={storesIcon} alt="stores" />
            Stores
          </button>
          <SidebarCategorises categoriesArray={categoriesArray} />
          <Filters />
        </div>
        <div className="sidebar__button-container d-block d-lg-none">
          <button type="button" onClick={sidebarDisplayToggleHandler} style={{ border: sidebarOpen && 'none' }}><img src={sidebarOpen ? LeftArrow : RightArrow} alt="right" /></button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
