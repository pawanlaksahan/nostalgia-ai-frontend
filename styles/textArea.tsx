export const textArea = {
  mobile: {
    container: { display: "flex", flexDirection: "column", gap: "0.5rem" },
    label: { fontSize: "0.9rem", color: "#555" },
    textarea: {
      minHeight: "100px",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "6px",
      resize: "vertical",
    },
  },
  desktop: {
    textarea: {
      minHeight: "150px",
      fontSize: "1rem",
    },
  },
};