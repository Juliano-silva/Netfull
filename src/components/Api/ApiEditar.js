import { useLocation,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from '../../estilo/Api.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
      <div>
        <label htmlFor={name}>{text}</label>
        <input className={style.Inputs} type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
      </div>
    )
  }
  function Textarea({ name, placeholder, handleOnChange, value }) {
    return (
      <div>
        <textarea className={style.Inputs} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
      </div>
    )
  }
  function Select({ text, name, options, handleOnChange, value }) {
    return (
      <div>
        <label htmlFor={name}>{text}:</label>
        <select className={style.Inputs}
          name={name}
          id={name}
          onChange={handleOnChange}
          value={value || ''}
        >
          <option>Selecione uma opção</option>
          {options.map((options) => (
            <option value={options.id} key={options.id}>
              {options.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
  function Reload(){
    document.location.reload(true);
  }
  function SubmitButton({ text }) {
    return (
      <div>
        <button className={style.BtnApi} id="reload" onClick={Reload}>{text}</button>
      </div>
    )
  }
  function LinkButton({ to, text }) {
    return (
      <Link to={to}>
        {text}
      </Link>
    )
  }  
  function NewProject() {
    const history = useHistory()
  
    function createPost(project) {
      // initialize cost and services
      project.cost = 0
      project.services = []
  
      fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
  
        })
    }
  
    return (
      <div className={style.fundo}>
        <br />
        <h1>Insirir um novo filme no Netfull</h1>
        <ProjectForm handleSubmit={createPost} btnText="Adicionar o filme" />
      </div>
    )
  }
  function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCategories(data)
        })
    }, [])
  
    const submit = (e) => {
      e.preventDefault()
      handleSubmit(project)
    }
  
    function handleChange(e) {
      setProject({ ...project, [e.target.name]: e.target.value })
    }
  
    function handleCategory(e) {
      setProject({
        ...project,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }
  
    return (
      <div className={style.FormIn}>
      <form onSubmit={submit}>
        <h1>Nome do Filme:</h1>
        <Input type="text" name="filme" placeholder="Insira o nome do filme" handleOnChange={handleChange} value={project.name}/>
        <h1>Nome do Diretor:</h1>
        <Input type="text" name="diretor" placeholder="Insira o nome do Diretor" handleOnChange={handleChange} value={project.diretor}/>
        <h1>Descrição do filme</h1>
        <Textarea text="Orçamento do projeto: " name="texto" placeholder="Descrição do filme" handleOnChange={handleChange} value={project.texto}/>
        <br />
        <Select name="category_id" text="Selecione a categoria do fime" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
        <SubmitButton text={btnText} />
        <Link to="Home" className={style.Voltar}>Voltar para o inicio</Link>
      </form>
      </div>
    )
  }
  
  function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({})
  
    const submit = (e) => {
      e.preventDefault()
      projectData.services.push(service)
      handleSubmit(projectData)
    }
  
    function handleChange(e) {
      setService({ ...service, [e.target.name]: e.target.value })
    }
  }
export default function Api(){
    return(
        <div>
            <NewProject/>
        </div> 
    )
}