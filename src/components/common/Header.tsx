import React from "react";
import { useComponentStyle } from "../../hooks/useComponentStyle";

export const Header: React.FC = () => {
  const Styles = useComponentStyle("header");
  const loggedIn = false; // TODO → replace with auth state

  return (
    <header style={Styles.wrapper}>
      <div style={Styles.logo}>
        <img src="/images/logo.png" alt="Nostalgia AI" style={Styles.image}/>
      </div>
      <div style={Styles.right}>
        {loggedIn ? (
          <div style={Styles.profileCircle}></div>
        ) : (
          <button style={Styles.signIn}>Sign In</button>
        )}
      </div>
    </header>
  );
};