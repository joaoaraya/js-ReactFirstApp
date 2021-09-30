import { ButtonA, ButtonB } from './components/button'

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ButtonA text="Clique em mim" />
      <ButtonB />
      <ButtonB />
      <ButtonA text="Não clique em mim" />
    </div>
  );
}

export default App;