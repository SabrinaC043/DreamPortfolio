import { useState } from 'react';
import './App.css';
import Header from './components/Navigation/Header';
import Main from './components/Homebase/Main';
import Contact from './components/Contact/Contact';



function App() {
  const [page, setPage] = useState('about')



  return (
    <div className='homePage'>
      <Header setPage={setPage} />
      <Contact />
      <Main page={page} />


    </div>
  );
}

export default App;
