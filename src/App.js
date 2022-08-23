import './App.scss';
import React_router from './Router/React_router';
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <React_router/>
  );
}

export default App;
