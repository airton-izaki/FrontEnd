

function Author ({nome, curso}){

     return (
          <div>
               <p>Nome do autor: {nome}</p>
               <p>Curso: {curso.nomecurso}</p>
               <p>Preço: {curso.preco}</p>
               <p>Carga horária: {curso.cargahoraria}</p>
          </div>
     );

}

export default Author