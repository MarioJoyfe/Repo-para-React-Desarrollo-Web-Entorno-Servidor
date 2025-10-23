import Navbar from "./components/Navbar";
import ListaNoticias from "./components/ListaNoticias";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container my-4">
        <div className="row">
          <div className="col-12 col-md-8">
            <ListaNoticias />
          </div>
          <div className="col-12 col-md-4">
            <Aside />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
