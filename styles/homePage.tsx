export const homePage = {
  mobile: {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
    },
    content: {
      flex: 1,
      padding: "1.2rem",
      marginTop: "1rem",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: 600,
      textAlign: "center",
      color: "#222",
    },
    subtext: {
      fontSize: "0.9rem",
      textAlign: "center",
      color: "#555",
      marginBottom: "0.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  },

  desktop: {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f3f4f7",
      padding: "2rem 4rem",
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "1rem",
    },
    card: {
      backgroundColor: "#fff",
      width: "60%",
      maxWidth: "700px",
      borderRadius: "1.2rem",
      padding: "2.5rem",
      boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      transition: "0.3s ease",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#1c1c1c",
    },
    subtext: {
      fontSize: "1rem",
      textAlign: "center",
      color: "#555",
      marginBottom: "0.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
    },
  },
};