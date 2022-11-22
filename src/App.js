import './App.css';
import house2 from './house2.jpg';
// import house3 from './house3.jpg';

const card1 = (
  <div className='card'>
    <h4 className='card__title'>house 2</h4>
    <img className='card__img' src={house2} alt='namas' />
    <hr />
  </div>
);

const card2 = (
  <div className='card'>
    <h4 className='card__title'>house 3</h4>
    <img className='card__img' src='/img/house3.jpg' alt='namas' />
    <hr />
  </div>
);
const card3 = (
  <div className='card'>
    <h4 className='card__title'>house 4</h4>
    <img className='card__img' src='/img/house4.jpg' alt='namas' />
    <hr />
  </div>
);
const card4 = (
  <div className='card'>
    <h4 className='card__title'>house 5</h4>
    <img className='card__img' src='/img/house5.jpg' alt='namas' />
    <hr />
  </div>
);
function Grid1() {
  return (
    <div className='houseGrid'>
      {card1}
      {card2}
      {card3}
      {card4}
      {card1}
      {card2}
      {card3}
      {card4}
    </div>
  );
}

function TeamItem() {
  return (
    <div className='teamItem'>
      <img className='team__img' src='/img/team2.jpg' alt='' />
      <h3 className='team__title'>John Doe</h3>
      <p className='team__occupation'>CEO & Founder</p>
      <p className='team__desc'>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button className='team__btn'>Contact</button>
    </div>
  );
}

function TeamItem2() {
  return (
    <div className='teamItem'>
      <img className='team__img' src='/img/team1.jpg' alt='' />
      <h3 className='team__title'>Jane Doe</h3>
      <p className='team__occupation'>Architect</p>
      <p className='team__desc'>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button className='team__btn'>Contact</button>
    </div>
  );
}
function Grid2() {
  return (
    <div className='teamGrid'>
      <TeamItem />
      <TeamItem2 />
      <TeamItem />
      <TeamItem2 />
    </div>
  );
}

function App() {
  const name = 'James';
  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello {name} !!! {150 * 45}
      </h1>
      <Grid1 />
      <Grid2 />
    </div>
  );
}

export default App;
