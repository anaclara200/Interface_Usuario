import logo from './logo.svg';

// aqui vc importa um CSS, pra add estilo na sua pagina e a pagina do css tem que ter o mesmo nome do arquivo do componente
//Ex.: App.js -> App.css; Teste.js -> Teste.css
//É interessante criar uma pasta para guardar dentro do dir src os componentes que vc vai criar
import './App.css';


//pode declar o export default diretamente aqui na funcao
//nao se deve declarar uma funcao dentro de outra, mas pode criar-las separadamente e chamar dentro da outra;

//export function Teste() seria um exemplo de exportacao nomeada;

// isso aqui é um componente;
function App() {
  return ( //return é diferente de export, pois aqui é o que vai ser retornado;
    <div className="App"> 
    {/* // className e a classe que usa para chamar a classe do CSS */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <p>ac</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default so pode ter um no arquivo;

export default App;// esse export é obrigatório pois diz como vc está exportando o componente, 
//esse é o modo padrão, isso tambem exporta o conteudo que esta sendo retornado na funcao, export tem que ter o mesmo nome da funcao;
