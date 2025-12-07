import React from "react";
import { useComponentStyle } from "../../hooks/useComponentStyle";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: "button" | "submit";
  variant: "primary" | "secondary";
  disabled: boolean;
  loading: boolean;
}

export const Button: React.FC<ButtonProps> = (Props) => {
  const Styles = useComponentStyle("button");
  const loading = Props.loading;
  const disabled = Props.disabled
  const mergedStyle = {...Styles.base, ...(Props.variant === "primary" ? Styles.primary : Styles.secondary), ...(disabled ? Styles.disabled : {})};

  return (
    <button
      type={Props.type}
      style={mergedStyle}
      onClick={!disabled && !loading ? Props.onClick : undefined}
      disabled={disabled || loading}
    >
      {loading ? "Processing..." : Props.label}
    </button>
  );
};