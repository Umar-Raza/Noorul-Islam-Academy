import { BrowserRouter } from "react-router";
import "./App.scss";
import Routes from "./pages/Routes";
import { Bounce, ToastContainer } from "react-toastify";
import "./config/global"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
