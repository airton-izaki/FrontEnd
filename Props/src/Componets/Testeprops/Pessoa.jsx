import React  from 'react'

function Pessoa ({nome, cidade, endereco}) {
      return (
            <div>
                  <p>Nome: {nome}</p>
                  <p>Cidade: {cidade}</p>
                  <p>Endereco: {endereco} </p>
            </div>
      )
}

export default Pessoa