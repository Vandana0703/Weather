import React from "react";
import { MainBlockLayout, RightContainer } from "./Styles";
import SideNavBar from "./SideNAvBAr";


function Layout(props) {
  const { Component } = props;
  return (
    <MainBlockLayout>
      <SideNavBar />
      <RightContainer>
        <main className="main-container" >
          <Component />
        </main>
      </RightContainer>
    </MainBlockLayout>
  )
}

export default Layout;