import styles from '../../estilo/load.module.css'
setTimeout( function load(){
     const lo = document.getElementById("Corpo")
     lo.style.display="block"
     const load = document.getElementById("Loader")
     load.style.display="none"
},2600)
export default function Loader(){
     return(
          <div className={styles.Loader} id="Loader">
              
          </div>
     )
}