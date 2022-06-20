import Api from './ApiEditar'
import style from '../../estilo/Api.module.css'
import { useLocation,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
function Projects() {
    const [projects, setProjects] = useState([])
  
    const location = useLocation()
  
    useEffect(() => {
      setTimeout(
        () =>
          fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
              setProjects(data)
            }),
        100,
      )
    }, [])
  
    function removeProject(id) {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(projects.filter((project) => project.id !== id))
        })
    }
  
    return (
      <div>
        <div customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                diretor={project.diretor}
                name={project.name}
                category={project.category.name}
                filme={project.filme}
                texto={project.texto}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
        </div>
      </div>
    )
  }
  function ProjectCard({ id, filme, category, handleRemove,texto,diretor }) {
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }
    return (
      <div className={style.Item}>
        <h1>{filme}</h1>
        <h5>{diretor}</h5>
        <h4>Gênero: {category}</h4>
        <p>{texto}</p>
        <div>
          <button className={style.BtnExcluir} onClick={remove}>
            <BsFillTrashFill />
            Excluir
          </button>
        </div>
      </div>
    )
  }
export default function ProjectX(){
  return(
    <div>
      <div className={style.ItemTudo}><Projects/></div>
    </div>
  )
}