import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

import "./assets/styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
