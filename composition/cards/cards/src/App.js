// import logo from './logo.svg';
import './App.css';
import doom from './doom.jpg'
import Card from './models/Card'

function App() {

  const card = [
    {
      img: doom
    },
    {
      title: 'Название карточки',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      button_text: 'Дум круто!'
    }
  ]

  return (
    <>
            { card.map((elementCard) => 
        <Card img={elementCard.img}>
          {<h5 className="card-title">{elementCard.title || 'Card title'}</h5>}
          {elementCard.text && <p className="card-text">{elementCard.text}</p>}
          {<a href='#' className="btn btn-primary">{elementCard.button_text || 'Go somewere'}</a>}
        </Card>
      ) }
    </>
  );
}

export default App;
