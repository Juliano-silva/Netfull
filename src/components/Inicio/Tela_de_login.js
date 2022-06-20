import style from './scss/TelaLogin.module.css'
import {Link} from 'react-router-dom'
export default function Tela(){
    return(
        <div className={style.LoginBk}>
            <br />
            <div className={style.Login}>
            <h1>Bem-vindo ao <span>Netful</span></h1>
            <div className={style.Inputs}>
            <h1>Digite seu Nome</h1><input type="text" id="name" placeholder='Nome'/><br />
            <h1>Digite sua Senha</h1><input type="password" id="password" placeholder='Senha' /><br />
            <h1>Digite sua Senha de novo</h1><input type="password" id="password" placeholder='Senha Novamente' /><br />
            <h1>Digite seu Email</h1><input type="email" id="email"  placeholder='Email'/><br />
            <br />
            <Link to="Home"><input type="button" value="ENVIAR" /></Link>
            </div>
            </div>
        </div>
    )
}