import React,{useState} from "react";
const Category =()=>{
    const menuLst = ["교회소개","삶과 말씀","주일학교","선교봉사","공동체나눔"]
    
    const [hide,setHide]=useState({"교회소개":false,"삶과 말씀": false,"주일학교":false,"선교봉사":false,"공동체나눔":false, });
    const mouseEvent =(menuName, bool)=>{
        const change = {...hide};
        change[menuName] =bool;
        setHide(change);    
    }
    

    return ( 
    <div className="topnav">
    <div className="topnavBtn">< img src={process.env.PUBLIC_URL+'/image/image9.jpg'} onClick={() => window.location.href="http://www.chamdoen.org/"} /></div>
    <nav className="nav">
    <ul className="navContainer">
      {menuLst.map((v) => (
        <li
          className={hide[v] ? "active" : "none"}
          onMouseEnter={() => mouseEvent(v, true)}
          onMouseLeave={() => mouseEvent(v, false)}
        >
          <p>{`${v}`}</p>
        </li>
      ))}
    </ul>
    <div className="detailMenu">
      {
        <ul
          onMouseEnter={() => mouseEvent( "detailMenu",true)}
          onMouseLeave={() => mouseEvent( "detailMenu",false)}
        >
          
          <div className = "Fstlst" onClick={()=>window.location.href="http://www.chamdoen.org/welcome.asp"}>
            <li id="detail" className="인사말씀" onClick={()=>window.location.href="http://www.chamdoen.org/vision.asp  "}> 인사말씀   </li>
            <li id="detail" className="목회철학과 비전"onClick={()=>window.location.href="http://www.chamdoen.org/history.asp"}> 목회철학과 비전  </li>
            <li id="detail" className="교회역사"onClick={()=>window.location.href="http://www.chamdoen.org/disciples.asp"}>교회역사   </li>
            <li id="detail" className="섬기는 분들"onClick={()=>window.location.href="http://www.chamdoen.org/rule.asp"}>  섬기는 분들 </li>
            <li id="detail" className="행정부서운영지침"onClick={()=>window.location.href="http://www.chamdoen.org/time.asp"}>  행정부서운영지침 </li>
            <li id="detail" className="예배시간 안내"onClick={()=>window.location.href="http://www.chamdoen.org/time.asp"}>  예배시간 안내 </li>
            <li id="detail" className="찾아오시는 길"onClick={()=>window.location.href="http://www.chamdoen.org/map.asp"}> 찾아오시는 길  </li>
            <li id="detail" className="차량운전안내"onClick={()=>window.location.href="http://www.chamdoen.org/traffic.asp"}>  차량운전안내 </li>
          </div>

          <div className = "Snd lst">
            <li id="detail" className="예배말씀" onClick={()=>window.location.href="http://www.chamdoen.org/gospel.asp"}> 예배말씀   </li>
            <li id="detail" className="목회칼럼"onClick={()=>window.location.href="http://www.chamdoen.org/column.asp"}> 목회칼럼  </li>
            <li id="detail" className="성경 공부"onClick={()=>window.location.href="http://www.chamdoen.org/biblestudy.asp"}>성경 공부   </li>
            <li id="detail" className="성경문답지"onClick={()=>window.location.href="http://www.chamdoen.org/bibleqna.asp"}>  성경 문답지 </li>
          </div>

          <div className = "Thrlst">
            <li id="detail" className="유치부"onClick={()=>window.location.href="http://www.chamdoen.org/school02.asp"}> 유치부 </li>
            <li id="detail" className="유초등부"onClick={()=>window.location.href="http://www.chamdoen.org/school03.asp"}> 유초등부 </li>
            <li id="detail" className="중고등부"onClick={()=>window.location.href="http://www.chamdoen.org/school04.asp"}> 중고등부   </li>
            <li id="detail" className="대학청년부"onClick={()=>window.location.href="http://www.chamdoen.org/school05.asp"}>  대학청년부 </li>
           
          </div>


          <div className = "Forlst">
            <li id="detail" className="국내외선교지"onClick={()=>window.location.href="http://www.chamdoen.org/mission01.asp"}> 국내외 선교지   </li>
            <li id="detail" className="한국컴패션어린이 "onClick={()=>window.location.href="http://www.chamdoen.org/mission02.asp"}>     한국컴패션 어린이  </li>
          </div>

      
          <div className = "Fiflst">
            <li id="detail" className="공동채소식"onClick={()=>window.location.href="http://www.chamdoen.org/news.asp"}> 공동체 소식   </li>
            <li id="detail" className="주보"onClick={()=>window.location.href="http://www.chamdoen.org/weekly.asp"}> 주보  </li>
            <li id="detail" className="공동체 사진"onClick={()=>window.location.href="http://www.chamdoen.org/photo.asp"}> 공동체 사진   </li>
            
          </div>
          
          </ul>

        
      }
    </div>
  </nav>
  </div>
);

}




export default Category;