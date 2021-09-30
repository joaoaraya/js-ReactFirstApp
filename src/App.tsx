import { ButtonA, ButtonB } from './components/button'

function App() {
  return (
    <div>
      <h1>Olá, mundo!</h1>
      <ButtonA text="Clique em mim" />
      <ButtonB />
      <ButtonA text="Não clique em mim" />
      <ButtonB />
      <ButtonA text="Clique em mim (se quiser)" />
      <ButtonB />
    </div>
  );
}

export default App;