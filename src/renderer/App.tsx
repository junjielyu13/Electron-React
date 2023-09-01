import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './css/normalize.css';
import './css/App.css';
// import TESTAPP from './component/test';
import MainLayout from './component/layout';

window.electron.ipcRenderer.once('ipc-example', (arg: any) => {
  console.log(arg);
  console.log(`!!!!!${arg}`);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
