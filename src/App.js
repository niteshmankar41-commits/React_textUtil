import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTextutils="About us" />
      <div className="container">
        <TextForm heading="TextFormat" />
      </div>
    </>
  );
}

export default App;
