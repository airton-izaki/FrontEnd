
import './App.css'
import Saudacao from './Componets/Testeprops/Saudacao'
import Pessoa from './Componets/Testeprops/Pessoa'
import Author from './Componets/Testeprops/Author'
function App() {  

    const nome = "Maria"

  return (
    <div>
      <p>Olá Mundo!!!!</p>
      <Saudacao nome = "Airton" />
      <Saudacao nome = "João" />
      <Saudacao nome = {nome} />

      <Pessoa 
      nome = "Pedro" 
      cidade = "Brasília" 
      endereco = 'Rua São Carlos' />

      <Author 
        nome = "Paulo"
        curso = {{nomecurso:"React", preco: '20,00 por hora', cargahoraria: "60 horas"}}
        
             />

    </div>
  )
}

export default App
