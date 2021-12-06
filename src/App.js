import React from 'react';
// import axios from 'axios';
import Header from './components/Header/index';
import CardDealBenefits from './components/CardDealBenefits/index';
import CardComfortAuto from './components/CardComfortAuto/index';
import CardSportAuto from './components/CardSportAuto/index';
import Footer from './components/Footer/index';

function App() {
  const [cardDealBenefits, setCardDealBenefits] = React.useState([]);
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
      <header className="header">
        <Header/>
        <div className="container">
          <div className="header__content">
            <div className="content__text">
              <div className="text__linkNetwork">
                <div className="linkNetwork__line"></div>
                <a href="https://www.instagram.com/?hl=ru">
                  <img className="linkNetwork__icon" src="/img/instagram-icon.svg" alt="network-icon" width="35" height="35"/>
                </a>
                <a href="https://vk.com/">
                  <img className="linkNetwork__icon" src="/img/vk-icon.svg" alt="network-icon" width="35" height="35"/>
                </a>
                <a href="https://ru-ru.facebook.com/">
                  <img className="linkNetwork__icon" src="/img/facebook-icon.svg" alt="network-icon" width="35" height="35"/>
                </a>
              </div>
              <h1 className="text__title">Автосалон Автомобилей <span className="title__span">Premium</span> Сегмента</h1>
            </div>
            <div className="content__image">
              <img className="image__img" src="img/content-img1.png" alt="content-auto" width="872" height="341"/>
            </div>
          </div>
          <div className="header__header-bottom">
            {cardDealBenefits.map((item, index) => (
              <CardDealBenefits
                key={index}
                text={item.text}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </header>
      <section className="allAuto">
        <div className="container">
          <h1 className="allAuto__title">Все автомобили:</h1>
          {cardComfortAuto.map((item, index) => (
            <CardComfortAuto
              key={index}
              categoryAuto={item.categoryAuto}
              imageUrlСar={item.imageUrlСar}
              carName={item.carName}
              carPrice={item.carPrice}
              imageUrlSpecific1={item.imageUrlSpecific1}
              specificTitle1={item.specificTitle1}
              specificInfo1={item.specificInfo1}
              imageUrlSpecific2={item.imageUrlSpecific2}
              specificTitle2={item.specificTitle2}
              specificInfo2={item.specificInfo2}
              imageUrlSpecific3={item.imageUrlSpecific3}
              specificTitle3={item.specificTitle3}
              specificInfo3={item.specificInfo3}
            />
          ))}

          {cardSportAuto.map((item, index) => (
            <CardSportAuto
              key={index}
              categoryAuto={item.categoryAuto}
              imageUrlСar={item.imageUrlСar}
              carName={item.carName}
              carPrice={item.carPrice}
              imageUrlSpecific1={item.imageUrlSpecific1}
              specificTitle1={item.specificTitle1}
              specificInfo1={item.specificInfo1}
              imageUrlSpecific2={item.imageUrlSpecific2}
              specificTitle2={item.specificTitle2}
              specificInfo2={item.specificInfo2}
              imageUrlSpecific3={item.imageUrlSpecific3}
              specificTitle3={item.specificTitle3}
              specificInfo3={item.specificInfo3}
            />
          ))}
        </div>
      </section>
        <Footer/>
    </div>
  );
}

export default App;
