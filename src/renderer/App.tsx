import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './css/normalize.css';
import './css/App.css';
import MainLayout from './component/layout';
import TEST2APP from './component/test2';

window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
window.electron.ipcRenderer.once('ipc-example', (arg: any) => {
  console.log(arg);
  console.log(`!!!!!${arg}`);
});

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TEST2APP />} />
        <Route path="/login" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
