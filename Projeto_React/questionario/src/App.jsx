import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        disc1: '',
        disc2: '',
    });
    const [feedback, setFeedback] = useState('');

    const correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'e',
    };

    const explanations = {
        q1: 'A tag <header> é semanticamente correta para o cabeçalho de uma página.',
        q2: 'O Flexbox é mais indicado para layouts unidimensionais (ou seja, em uma direção).',
        q3: 'O React usa uma abordagem baseada em componentes para a construção de interfaces.',
    };

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let feedbackText = '';

        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] !== correctAnswers[key]) {
                feedbackText += `Questão ${key.slice(1)} está incorreta. ${explanations[key]}\n`;
            }
        });

        setFeedback(feedbackText || 'Parabéns! Você acertou todas as questões de múltipla escolha.');
    };

    return (
        <div className="container">
            <h1>Prova de Construção de Frontend</h1>
            <form onSubmit={handleSubmit}>
                <div className="header">

                    <label>
                        Nome:
                        <input  type="text"  value={name}     onChange={(e) => setName(e.target.value)}       required  />
                    </label>

                    <label>
                        Matrícula:
                        <input  type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)}  required  />
                    </label>

                </div>

                <div className="questions">
                    <h2>Questões de Múltipla Escolha</h2>
                    <div className="question">
                        <p>1. Qual é a tag HTML correta para definir um cabeçalho?</p>
                        <label>
                            <input type="radio"  name="q1" value="a" checked={answers.q1 === 'a'} onChange={handleChange} required  /> a) &lt;header&gt;
                        </label>

                        <label>
                            <input type="radio" name="q1"  value="b" checked={answers.q1 === 'b'} onChange={handleChange}  /> b) &lt;head&gt;
                        </label>

                        <label>
                            <input  type="radio"  name="q1"  value="c" checked={answers.q1 === 'c'} onChange={handleChange}  />  c) &lt;section&gt;
                        </label>

                        <label>
                            <input  type="radio"  name="q1"  value="d" checked={answers.q1 === 'd'} onChange={handleChange}  />  d) &lt;nav&gt;
                        </label>

                        <label>
                            <input  type="radio"  name="q1"  value="e" checked={answers.q1 === 'e'} onChange={handleChange}  />  e) &lt;footer&gt;
                        </label>
                    </div>

                    <div className="question">
                        <p>2. Qual é a melhor opção para criar um layout unidimensional?</p>
                        <label>
                            <input type="radio" name="q2" value="a" checked={answers.q2 === 'a'} onChange={handleChange} required /> a) Grid Layout
                        </label>
                        <label>
                            <input type="radio" name="q2" value="b" checked={answers.q2 === 'b'} onChange={handleChange} />  b) CSS Columns
                        </label>
                        <label>
                            <input type="radio" name="q2" value="c" checked={answers.q2 === 'c'} onChange={handleChange} />  c) Flexbox
                        </label>
                        <label>
                            <input type="radio"  name="q2" value="d" checked={answers.q2 === 'd'} onChange={handleChange} />  d) Positioning
                        </label>
                        <label>
                            <input type="radio" name="q2" value="e" checked={answers.q2 === 'e'}  onChange={handleChange} />  e) Table Layout
                        </label>
                    </div>
                    <div className="question">
                        <p>3. Qual dessas tecnologias é usada para criar interfaces baseadas em componentes?</p>
                        <label>
                            <input type="radio" name="q3" value="a" checked={answers.q3 === 'a'} onChange={handleChange} required /> a) Bootstrap
                        </label>
                        <label>
                            <input type="radio" name="q3" value="b" checked={answers.q3 === 'b'} onChange={handleChange} /> b) jQuery
                        </label>
                        <label>
                            <input type="radio" name="q3" value="c" checked={answers.q3 === 'c'} onChange={handleChange} /> c) AngularJS
                        </label>
                        <label>
                            <input type="radio" name="q3" value="d" checked={answers.q3 === 'd'} onChange={handleChange} /> d) Backbone.js
                        </label>
                        <label>
                            <input type="radio" name="q3" value="e" checked={answers.q3 === 'e'} onChange={handleChange} /> e) React
                        </label>
                    </div>

                    <h2>Questões Discursivas</h2>
                    <div className="question">
                        <p>1. Explique a importância do uso de componentes na construção de interfaces modernas.</p>
                        <textarea   name="disc1"    value={answers.disc1}  onChange={handleChange}  required />
                    </div>
                    <div className="question">
                        <p>2. Descreva as principais vantagens do uso de Flexbox em layouts CSS.</p>
                        <textarea name="disc2"  value={answers.disc2} onChange={handleChange} required   />
                    </div>
                </div>

                <button className='button' type="submit">Enviar Respostas</button>
            </form>
            {feedback && <div className="feedback"><h3>Feedback:</h3><p>{feedback}</p></div>}
        </div>
    );
}

export default App;