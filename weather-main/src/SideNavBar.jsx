import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./Styles";

export const menuItems = [
  {
    text: "Home",
    link: "/",
    index: "1",
  },
  {
    text: "Forecast",
    link: "/Forecast",
    index: "2",
  },
  {
    text: "Feedback",
    link: "/Feedback",
    index: "3",
  }
]

export default function HamburgerMenu({ theme }) {
  var lightmode = false;
  const navigate = useNavigate();
  var GetMode = () => {
    return lightmode ? "light" : "dark";
  };

  function handleClick(e, item) {
    return navigate(item.link);
  }

  return (
    <div className="Main">
      <Navbar
        className="Navy"
        collapseOnSelect
        expand="full"
        bg={GetMode()}
        variant={GetMode()}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {menuItems.map((item) =>
              <MenuItem key={item.index} onClick={(e) => handleClick(e, item)} >{item.text}</MenuItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}


