import React from "react";
import { useComponentStyle } from "../../hooks/useComponentStyle";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const Styles = useComponentStyle("header");
  const navigate = useNavigate();
  const loggedIn = false; // TODO → replace with auth state

  const handleSignIn = (e : React.MouseEvent) => {
    e.preventDefault();
    navigate("/signIn");
  }

  return (
    <header style={Styles.wrapper}>
      <div style={Styles.logo}>
        <img src="/images/logo.png" alt="Nostalgia AI" style={Styles.image}/>
      </div>
      <div style={Styles.right}>
        {loggedIn ? (
          <div style={Styles.profileCircle}></div>
        ) : (
          <button style={Styles.signIn} onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </header>
  );
};