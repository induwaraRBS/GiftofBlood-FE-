import Header from './Components/Header';
import Banner from './Components/Banner';
import './App.css';
import Body from './Components/Body';
import Callnow from './Components/Callnow';





function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header/>

      {/* AppBody */}
      <div className='Banner'>
          <Banner />    
      </div>
      {/* Readmore */}
      <div className='Body'>
          <Body/>
      </div>
      {/* Callnow */}
      <div className='Callnow'>
        <Callnow/>
      </div>
      {/* ClientSay */}
       {/* Footer  */}
    </div>
  );
}

export default App;
