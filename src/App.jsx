import React from 'react';
import Logo1 from './components/Logo1';
import './App.css'
import arrow from './images/arrow.png'
import Logo2 from './components/Logo2';
import Logo3 from './components/Logo3';
import Logo4 from './components/Logo4';

function App() {

  return (
    <div style={{backgroundColor:"#3f3a52" , height:"100vh" , width:"100vw"}}>
      <h1 >How It Works</h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }}>

        
        <div className="Ellipse1"  >
          <p style={{ margin: "0px", padding: "0px" }}><Logo1 /></p>
          <div className='font'>Step 1:</div>
          <div className='font'>Set your goal</div>
        </div>

        {/* arrow  */}
        <img className="arrow1" src={arrow} alt="Logo" />


        <div className="Ellipse2" >
        <p style={{ margin: "0px", padding: "0px" }}><Logo2/></p>
          <div className='font'>Step 2:</div>
          <div className='font'>Create or Join Group</div>
        </div>

        {/* arrow  */}
        <img className="arrow2" src={arrow} alt="Logo" />


        <div className="Ellipse3" >
        <p style={{ margin: "0px", padding: "0px" }}><Logo3 /></p>
        <div className='font'>Step 3:</div>
          <div className='font'>Pay amount on time</div>
        </div>

        {/* arrow  */}
        <img className="arrow3" src={arrow} alt="Logo" />



        <div className="Ellipse4" >
        <p style={{ margin: "0px", padding: "0px" }}><Logo4 /></p>
        <div className='font'>Step 4:</div>
          <div className='font'>Earn Rewards</div>
        </div>
      </div>
    </div >
  );
}

export default App;
