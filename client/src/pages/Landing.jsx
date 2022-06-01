import "../styles/Landing.css"

export default function Landing() {
  return (
    <div className="landing">
      <h1 style={{ color: "white" }}>Esta es la landing!</h1>
      <button>
        <a href="/inicio">Entrar al home!</a>
      </button>
    </div>
  );
}
