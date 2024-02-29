import './App.css';
import React,{useState} from "react";
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Category from './floor';
function App() {

  return (
    <div className="App">  
     
     <Category/>
    
    <div className="all">
    <div className="First_and_second">
      <div className="first" >
      < img src={process.env.PUBLIC_URL+'/image/image1.jpg'} onClick={() => window.location.href="https://www.youtube.com/watch?v=FdBfvD8ItjQ"} />
      </div>
      <div className="secondTothird">
      <div className="second">
      < img src={process.env.PUBLIC_URL+'/image/image2.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/welcome.asp"} />
      </div>

      <div className="third">
      < img src={process.env.PUBLIC_URL+'/image/image3.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/news.asp"} />
      </div>
      </div>
      </div>
      <div className='underpic'>
      <div className="five">
      < img src={process.env.PUBLIC_URL+'/image/image5.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/school02.asp"} />
      </div>
      <div className="six">
      < img src={process.env.PUBLIC_URL+'/image/image6.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/mission01.asp"} />
      </div>
      <div className="seven">
      < img src={process.env.PUBLIC_URL+'/image/image7.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/weekly.asp"} />
      </div>
      <div className="eight">
      < img src={process.env.PUBLIC_URL+'/image/image8.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/column.asp"} />
      </div>
      </div>
      </div>


      
      <div className="under">

      <div className='underbox1'>  <ul id='underBtn' onClick={()=>window.location.href="http://www.chamdoen.org/time.asp" }>예배 시간 안내</ul>
        <ul id='underBtn' onClick={()=>window.location.href="http://www.chamdoen.org/map.asp" }>찾아오시는 길</ul>
        <ul id='underBtn' onClick={()=>window.location.href="http://www.chamdoen.org/traffic.asp" }>차량 운행 안내</ul>
        </div>
      <div className='underletter'>
      <div className='underletterone'>대한예수장로 교회      <div id='buleletter'>참된교회 </div>     담임목사  <div id='buleletter'>장성락</div> </div> </div>
      <div className='underlettertwo'>경기도 고양시 일산동구 중산로 157번길 59               T. 031-976-6993~4    F. 031-976-6997</div>
      <div className='underletterthree'>© 참된교회, All Rights Reserved.</div>
      </div>

      
    

    </div>
   
   
   
   
  );
}

export default App;
