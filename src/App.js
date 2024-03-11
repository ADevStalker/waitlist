import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowWorks from './components/HowWorks';
import Price from './components/Price';
import Footer from './components/Footer';
import SurveyComponent from './components/Survey';
import { useState } from 'react';
import SurveyContext from './context/SurveyContext';

function App() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [mailContext, setMailContext] = useState('');
  return (
    <SurveyContext.Provider
      value={{
        showSurvey,
        setShowSurvey,
        mailContext,
        setMailContext,
      }}
    >
      <main className='lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded'>
        <Header />
        <Hero />
        <SurveyComponent showSurvey={showSurvey} />
        <About />
        <HowWorks />
        {/* <Price /> */}
        <Footer />
      </main>
    </SurveyContext.Provider>
  );
}

export default App;
