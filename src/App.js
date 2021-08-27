import './App.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Inicio from './pages/inicio';
import Header from './component/header';
import Footer from './component/footer';
import Productos from './pages/productos';
import Hombre from './pages/hombre';
import Mujer from './pages/mujer';
import Detalles from './pages/detalles';
function App() {
  return (
    <HashRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Inicio}/>
      <Route exact path="/productos" component={Productos}/>
      <Route exact path="/Hombres" component={Hombre}/>
      <Route exact path="/mujeres" component={Mujer}/>
      <Route path="/:slug" component={Detalles} />
      </Switch>
      <Footer/>
    </HashRouter>

  );
}

export default App;
