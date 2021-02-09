import { useSelector, useDispatch } from 'react-redux';

//CSS
import './App.css';

//Components
import CreateCompany from './components/CreateCompany'
import HandleCompany from './components/HandleCompany'

function App() {
  //const companyName = useSelector(state => state.companyName)
  return (
    <div className="App">
      <header className="App-header">

        AFRY TEST + REDUXX
        
        <CreateCompany />

        <HandleCompany />
      </header>
    </div>
  );
}

export default App;
