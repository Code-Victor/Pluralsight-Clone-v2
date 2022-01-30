import React, { useEffect } from "react";
import Modal from "../Modal";

const categories = ["Platform", "Products", "Resources"];
const NavBar = () => {
  const [modal, setModal] = React.useState("off");
  return (
    <nav className="nav-bar">
      <div className="container nav-bar__wrapper">
        <div className="nav-bar__logo">
          <img src="./images/asset 50.png" alt="logo" />
        </div>
        <div className="nav-bar__links">
          <div className="nav-bar__link-group">
            {categories.map((category, index) => {
              return (
                <NavWModal
                  name={category}
                  key={index}
                  modal={modal}
                  setModal={setModal}
                  />
              );
            })}
            <a href="#" className="nav-item">
              For Individuals
            </a>
          </div>
          <div className="nav-bar__ctas">
            <img
              src="./images/search-icon.svg"
              alt="search"
              className="search"
            />
            <NavWModal
              name="Sign In"
              modal={modal}
              setModal={setModal}
            />
            <div className="cta-btn">try for free</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

function NavWModal({ name, modal,setModal }) {
  const [flap, setFlap] = React.useState(false);
  useEffect(()=>{
    if(name===modal){
      setFlap(true);
    }
    else if (name !== modal) {
      setFlap(false);
      console.log(`not equall to ${name}`);
    }
  },[setModal,modal])
  function handleClick(){
    setModal(name);
    console.log(`clicked`);
    if((name ===modal)===true && flap===true){
      setModal('off');
      console.log(`off`);
    }

  }
  
  return (
    <a href="#" className="nav-item" onClick={handleClick}>
      {name}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={flap ? "flap" : ""}
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      {flap && <Modal></Modal>}
    </a>
  );
}

export default NavBar;
