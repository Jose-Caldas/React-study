import Counter from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/Global.scss";

function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}

export default App;
