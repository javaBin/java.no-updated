import './App.css';
import Header from './components/Header';
import MvpJumbottron from './components/MvpJumbottron';
import Mvp from './pages/Mvp';

function App() {
  return (
    <div className="app">
      <MvpJumbottron />
      <Header />
      <Mvp />
    </div>
  );
}

export default App;
