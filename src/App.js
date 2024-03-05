import './App.css';
import { useRoutes } from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import routes from './Routes';
function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <Header />
        {router}
      </div>
    </div>
  );
}
export default App;
