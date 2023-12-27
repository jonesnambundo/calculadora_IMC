import React, { useState } from 'react';
import "./styles.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imcMessage, setImcMessage] = useState("");

  const calcularIMC = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (!altura || !peso) {
      alert("[ERROR 404] Por Favor, preencha o peso e a altura corretamente!");
      return;
    }

    const classificacoes = [
      { max: 16.9, mensagem: "Você está muito abaixo do peso !" },
      { min: 17, max: 18.4, mensagem: "Você está Abaixo do peso !"},
      { min: 18.5, max: 24.9, mensagem: "Você está com peso normal !"},
      { min: 25, max: 29.9, mensagem: "Você está acima do peso !"},
      { min: 30, max: 34.9, mensagem: "Você está com Obesidade Grau I !"},
      { min: 35, max: 39.9, mensagem: "Você está com Obesidade Grau II !"},
      { min: 40, mensagem: "Você está com Obesidade Grau III !" },
    ];

    const classificacao = classificacoes.find(({ min = -Infinity, max = Infinity }) => imc >= min && imc <= max);

    if (classificacao) {
      setMensagem(classificacao.mensagem);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    }

    setPeso("");
    setAltura("");
  };

  return (
    <div className="app">
      <div className="area-input">
        <h1>Calculadora de IMC</h1>
        <span>Vamos Calcular seu IMC ?</span>
        <input
          type="text"
          placeholder="Peso em [Kg] Ex: 75"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em [Cm] Ex: 170"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

        <h2>
          {mensagem} <br />
          {imcMessage}
        </h2>
      </div>
    </div>
  );
}

export default App;
