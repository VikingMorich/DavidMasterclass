import './App.css';

export default function Home() {

  const randomNumber = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  const buttonPressed = function () {
    window.location.href = "/welcome"
  }
  return (
    <div className="main-page"> 
      <h1 className="main-title">Magic Dice</h1>
      <div className="start-button" onClick={buttonPressed}>
        <span className="button-text"> Start </span>
      </div>
    </div>
  );
}