import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Amadou Diallo",
        bio: "Je suis un développeur passionné par la technologie.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Développeur Web",
      },
      show: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000); // Incrémente chaque seconde
  }

  componentWillUnmount() {
    clearInterval(this.intervalID); // Nettoyage de l'intervalle quand le composant se démonte
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Cacher le profil" : "Montrer le profil"}
        </button>

        {show && (
          <div>
            <img src={person.imgSrc} alt="profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
