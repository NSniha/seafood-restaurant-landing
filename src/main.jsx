import { Component } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || "Something went wrong.",
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "24px",
            background: "#050504",
            color: "#ffffff",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ marginBottom: "12px" }}>Website loading problem</h1>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.75)" }}>
              {this.state.errorMessage}
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  );
} else {
  document.body.innerHTML =
    "<h1 style='font-family: Arial; padding: 24px;'>Root element not found. Please check index.html.</h1>";
}