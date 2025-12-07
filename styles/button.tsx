export const button = {
  mobile: {
    base: {
      width: "100%",
      padding: "0.8rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.2s ease-in-out",
      marginTop: "1rem",
    },
    primary: {
      backgroundColor: "#4f46e5",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
    },
    disabled: {
      backgroundColor: "#9ca3af",
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
  desktop: {
    base: {
      width: "auto",
      padding: "0.8rem 2rem",
      fontSize: "1.05rem",
    },
    primary: {
      ":hover": {
        backgroundColor: "#4338ca",
      },
    },
  },
};