import React from "react";
import { useComponentStyle } from "../../hooks/useComponentStyle";

export const Footer: React.FC = () => {
  const Styles = useComponentStyle("footer");

  return (
    <footer style={Styles.wrapper}>
      <p style={Styles.text}>
        © {new Date().getFullYear()} NOSTALGIA AI  — All rights reserved.
      </p>
    </footer>
  );
};