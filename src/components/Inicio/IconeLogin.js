import style from '../../estilo/login.module.css'
import {Link} from 'react-router-dom'
export default function Icone(){
    return(
        <div className={style.IconeLogin}>
        <div className={style.icon}>
        <li className={style.avançar}><Link to="/Login">+</Link></li>
        <ul className={style.menu}>
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Home">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
          <li className={style.spread}>
          <Link className={style.unit} to="/Login">+</Link>
          </li>
          
        </ul>
      </div>
        </div>
    )
}