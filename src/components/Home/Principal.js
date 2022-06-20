import style from '../../estilo/Home.module.css'
import {Link} from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai'
import Projects from '../Api/Project'
import Header from './Header'
export default function Principal(){
    return(
        <div>
            <Header/>
            {/* Parte inicial */}
            <div className={style.Slide}>
                <br />
                <div className={style.SlideConte}>
                <h6>Original Netful</h6>
                <h1 className={style.NF}>Halloween a vingança de michael jackson</h1>
                <button className={style.btnP}><BsFillPlayFill/>Assistir</button>
                <button className={style.btnP}><AiFillInfoCircle/>Mais informações</button>
                </div>
            </div>
            <div>
            <Link to={'/project'} className={style.AF}><button>Adicionar um filme</button></Link>
            <br />
            <h1 className={style.ML}>Minhas Listas</h1>
            <br />
            <Projects/>
            </div>
            <br />
        </div>
    )
}