import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      
      <div id="head">alishan</div>
    
    <div id="sub1">
      <div id="sub1-1">
      <h1>Fuel great thinking.</h1>
      <p>Become a Medium member to enjoy unlimited access and <br />
directly support the writers you read most.</p>
<button id="button1" >Get unlimited access</button>

      </div>
      <div id="sub1-2">
        <div>
          <h2>Get unlimited access to every story.</h2>
          <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg" alt="" />
          <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
        </div>
<hr />
        <div>
          <h2>Support the voices you want to hear more from.</h2>
          <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg" alt="" />
          <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>
        </div>
      </div>
     
    </div>
    


   <div id="sub2">
    <div id="sub2-1">
    <h2>Why I'm a Medium Member...</h2>
    </div>
    
    <div id="sub2-2" >
      <div id="sub2-2-1">
        
     <div class="relative"> <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Coco.png" alt="" /></div>
      </div>


      <div id="sub2-2-2">
    <h3>
    "For me, the access to a variety of ideas and perspectives is invaluable. Medium brings people from all over into one shared space where we can grow and learn together."
    </h3>
    <h3>
    Joseph Coco
    </h3>
    <div id="buttons"><button>←</button>
   <button>→</button></div>
   
    </div>


    </div>
    </div>



    <div id="sub3">
      <div id="sub3-1">
        <h1>Take your mind <br/>in new directions.</h1>

      </div>

      <div id="sub3-2">
      
        <div id="sub3-2-1">
          <button id="button2">Get unlimited access</button>
        </div>
        <div id="sub3-2-2">
          <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" alt="" />
        </div>
      </div>
    </div>

    <div id="foot">
    <button onclick="good()"  >main</button>

    <div id="data"></div>
    </div>

    </div>



  );

}

export default App;




function good(){
  let data= document.getElementById("data")
  let p = document.createElement("p")

  p.textContent="Alishan Ajim Shaikh"
  data.append(p)
}