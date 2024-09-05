import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="container">
      <header>
          <form className='header' action="">
            <h1>Avaliação sobre Construção de Frontend</h1>
            <label for="name" id="nome" >Nome</label>
            <input type="text" id="nome" required placeholder="Digite seu nome"></input>

            <label for="matricula">Matrícula</label>
            <input type="text" id="matricula" required placeholder="Digite sua matrícula"></input>
          </form>
      </header>
      
      <section>
        <form className='section_question' action="">
          <div className="question">
            <h3>Questão 01</h3>
            <p>Qual tag HTML é usada para definir um parágrafo?</p>
            <label htmlFor="">
              <input type="radio" name="q1" value="a" id="" /> a) &lthead&gt
            </label>

            <label htmlFor="">
              <input type="radio" name="q1" value="b" id="" />  b) &ltbody&gt
            </label>

            <label htmlfor="">
              <input type="radio" name="q1" value="c" id="" /> c) &ltp&gt
            </label>

            <label htmlfor="">
              <input type="radio" name="q1" value="d" id="" />d) &ltdiv&gt
            </label>


            <h3>Questão 02</h3>
            <p>Qual é o propósito principal do JavaScript em uma página web?</p>
            <label htmlfor="">
                <input type="radio" name="q2" value="a" id="" />a) Estruturar o conteúdo
            </label>

            <label htmlfor="">
                <input type="radio" name="q2" value="b" id="" />b) Definir a aparência
            </label>

            <label htmlfor="">
                <input type="radio" name="q2" value="c" id="" />c) Adicionar interatividade
            </label>

            <label htmlfor="">
                <input type="radio" name="q2" value="d" id="" />e) Otimizar o desempenho
            </label>


            <h3>Questão 03</h3>
            <p>Qual atributo HTML é usado para incluir uma folha de estilo externa em um documento?</p>
            <label htmlfor="">
                <input type="radio" name="q3" value="a" id="" />a) &ltstyle&gt
            </label>

            <label htmlfor="">
                <input type="radio" name="q3" value="b" id="" />b) &ltlink&gt
            </label>

            <label htmlfor="">
                <input type="radio" name="q3" value="c" id="" />c) &ltscript&gt
            </label>

            <label htmlfor="">
                <input type="radio" name="q3" value="d" id="" />e) &ltmeta&gt
            </label> 


            <h3>Questão 04</h3>                    
            <p>Qual atributo HTML é usado para incluir uma folha de estilo externa em um documento?</p>
            <textarea name="q4" id=""></textarea>

            <h3>Questão 05</h3>
            <p>Explique o conceito de "responsividade" no desenvolvimento web.</p>
            <textarea class="q5" name="q5" id=""></textarea>       

          </div>

          <div class="button">
            <button type="button" onclick="corrigirProva()">Enviar as respostas</button>
          </div>


        </form>
      </section>

      </div>

    </>
  )
}

export default App
