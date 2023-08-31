import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './css/App.css';
import TESTAPP from './component/test';
import Ant from './component/ant';

window.electron.ipcRenderer.once('ipc-example', (arg: any) => {
  console.log(arg);
  console.log(`!!!!!${arg}`);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react</h1>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          Read our docs
        </button>
        <button type="button">
          <span role="img" aria-label="folded hands">
            🙏
          </span>
          Donate
        </button>
      </div>

      <TESTAPP />
      <Ant />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
