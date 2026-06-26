import { Component } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      message: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || "Something went wrong while loading the app.",
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React render error:", error);
    console.error("React error info:", errorInfo);
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
            <h1 style={{ margin: "0 0 12px" }}>Website loading problem</h1>

            <p style={{ margin: 0, color: "rgba(255,255,255,0.75)" }}>
              {this.state.message}
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;background:#050504;color:#fff;font-family:Arial,sans-serif;padding:24px;text-align:center;">
      <div>
        <h1>Root element not found</h1>
        <p>Please check index.html and make sure &lt;div id="root"&gt;&lt;/div&gt; exists.</p>
      </div>
    </main>
  `;
} else {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}