import './App.css';

export default function Starter() {
let selectedDice = null
  const randomNumber = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  const buttonPressed = function () {
    window.location.href = "/"
  }
const selecction = function (event) {
    if (event.target.className === "starter-card") {
        if(document.getElementsByClassName("selected-card").length !== 0) {
            document.getElementsByClassName("selected-card")[0].className = "starter-card"
        }
        event.target.className="starter-card selected-card"
        selectedDice = event.target.id
    }
    console.log(selectedDice)
}
  return (
    <div className="welcome-page"> 
      <h1>Choose your companion</h1>
      <div className="wrapper-cards">
          <div className="starter-card" onClick={selecction} id="1"></div>
          <div className="starter-card" onClick={selecction} id="2"></div>
          <div className="starter-card" onClick={selecction} id="3"></div>
      </div>
      <div className="next-button" onClick={buttonPressed}>
        <span className="button-text"> Next </span>
      </div>
    </div>
  );
}