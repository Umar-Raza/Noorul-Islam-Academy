import { BrowserRouter } from "react-router";
import "./App.scss";
import Routes from "./pages/Routes";
import { Bounce, ToastContainer } from "react-toastify";
import "./config/global"
import { useEffect, useState } from "react";
import { Loadaer } from "./components/loader/Loadaer";
function App() {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])


  return (
    <>
      {
        loading ? (
          <Loadaer />
        ) :
          (<BrowserRouter>
            <Routes />
          </BrowserRouter>
          )
      }


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
