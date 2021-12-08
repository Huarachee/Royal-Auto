import React from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import TraideIn from './pages/TraideIn';
import Leasing from './pages/Leasing';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer/index';

function App() {
  const [cardDealBenefits, setCardDealBenefits] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardComfortAuto, setCardComfortAuto] = React.useState([]);
  const [cardSportAuto, setCardSportAuto] = React.useState([]);

  // Инфа с бэка про карточки преимуществ нашего автосервиса
  React.useEffect(() => { // Если наша карточка изменилась, то мы больше не будем вызывать fetch
    fetch('https://61abfc33264ec200176d4394.mockapi.io/carDealershipBenefits')
      .then((res) => {
        return res.json(); // Мы буквально говорим вернуть ответ с бэка в json формате.
      })
      .then((json) => {
        setCardDealBenefits(json);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  // Инфа с бэка про карточки автомобилей (комфорт автомобили)
  React.useEffect(() => {
    fetch('https://61abfc33264ec200176d4394.mockapi.io/cardSetItemsComfortCar')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCardComfortAuto(json);
      });
  }, []);

  // Инфа с бэка про карточки автомобилей (спорт автомобили)
  React.useEffect(() => {
    fetch('https://61abfc33264ec200176d4394.mockapi.io/cardSetItemsSportCar')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCardSportAuto(json);
      });
  }, []);

  return (
    <div className="App">
        <Route path="" exact>
          <Home 
            cardDealBenefits={cardDealBenefits} 
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput} 
            setSearchValue={setSearchValue}
            cardComfortAuto={cardComfortAuto} 
            cardSportAuto={cardSportAuto}
          />
        </Route>
        <Route path="traideIn" exact>
          <TraideIn/>
        </Route>
        <Route path="leasing" exact>
          <Leasing/>
        </Route>
        <Route path="aboutUs" exact>
          <AboutUs/>
        </Route>
      <Footer/>
    </div>
  );
}

export default App;
