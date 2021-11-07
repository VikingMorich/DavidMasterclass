import './App.css';

export default function Welcome() {

  const randomNumber = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  const buttonPressed = function () {
    window.location.href = "/starter"
  }
  return (
    <div className="welcome-page"> 
      <h1>Welcome to Magic Dice</h1>
      <p>Magic dice is a word where creature's souls live inside dices.</p>
      <div className="next-button" onClick={buttonPressed}>
        <span className="button-text"> Next </span>
      </div>
    </div>
  );
}
