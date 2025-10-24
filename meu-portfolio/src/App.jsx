import StarBackground from "./components/StarBackround";
import GeometricShape from "./components/FloatingModel";
import "./App.css"

function App() {
  return (
    <>
      <main className="app" style={{ position: "relative", color: "#fff", textAlign: "center" }}>
        <StarBackground />
        <h1 style={{ marginTop: "40vh" }}>Meu Portfólio</h1>
      </main>
    </>
  );
}

export default App;