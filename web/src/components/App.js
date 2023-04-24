/* IMPORT */
import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import { useEffect, useState } from "react";
// Importamos el servicio del local storage
// import ls from "../services/localStorage";
import callToApi from "../services/api";

// Importamos los componentes
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Shop from "./main/shop/Shop";

import Home from "./main/home/Home";
import DetailShop from "./main/shop/DetailShop";

function App() {
  /* VARIABLES Y DATOS */
  const [dataFetch, setDataFetch] = useState([]);
  /* EFECTOS */
  useEffect(() => {
    callToApi().then((data) => {
      setDataFetch(data);
    });
  }, []);

  /* FUNCIONES HANDLER */
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */
  const { pathname } = useLocation();
  const routeData = matchPath("product-detail/:id", pathname);
  const productId = routeData === null ? null : routeData.params.id;
  const productFound = dataFetch.find(
    (obj) => parseInt(obj.idProduct) === parseInt(productId)
  );

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop dataFetch={dataFetch} />} />
          <Route
            path='/product-detail/:id'
            element={<DetailShop productFound={productFound} />}
          ></Route>
        </Routes>
      </main>
      <Footer prueba='hola' />
    </div>
  );
}

export default App;
