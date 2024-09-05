import React from 'react'

const SecondComponents = () => {

     const alunos = 
     [
          {nome: "Airton", curso: "Análise e Desenvolvimento de Sistema", matr: "123456"},          
          {nome: "Maria", curso: "Direito", matr: "654987"},
          {nome: "João", curso: "Engenharia Civil", matr: "456123"}
     ];

     

  return (
    <div>
          <h1>Lista de alunos</h1>
          {
               alunos.map
                    ( aluno => 
                         <p>
                              {aluno.nome},
                              {aluno.curso},
                              {aluno.matr}
                         </p>
                    )
          }
          
    </div>
  )
};

export default SecondComponents
