import style from './estilo/style.module.css'
import Login from './components/Inicio/Login'
import Tela from './components/Inicio/Tela_de_login'
import Principal from './components/Home/Principal'
import Api from '../src/components/Api/ApiEditar'
import Load from './components/Loader/load'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function load(){
  const lo = document.getElementById("Corpo")
  lo.style.display="none"
}
export default function App(props){
  return(
    <div onLoad={load}>
      <Load/>
    <div className={style.CorpoTudo} id='Corpo'>
    <Router>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route path="/Login"><Tela/></Route>
        <Route path="/Home"><Principal/></Route>
        <div>
        {props.children}
          <Route path="/">
            <Api/>
          </Route>
        </div>
      </Switch>
    </Router>
    </div>
    </div>
  )
}
