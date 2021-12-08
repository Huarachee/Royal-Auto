import React from "react";
import Header from '../components/Header/index';
import CardDealBenefits from '../components/CardDealBenefits/index';
import CardComfortAuto from '../components/CardComfortAuto/index';
import CardSportAuto from '../components/CardSportAuto/index';

function Home({ cardDealBenefits,
    searchValue,
    onChangeSearchInput,
    setSearchValue,
    cardComfortAuto,
    cardSportAuto }) {
    return (
        <div className="homePage">
            <header className="header">
            <Header/>
            <div className="container">
              <div className="header__content">
                <div className="content__text">
                  <div className="text__linkNetwork">
                    <div className="linkNetwork__line"></div>
                    <a href="https://www.instagram.com/?hl=ru">
                      <img className="linkNetwork__icon" src="img/instagram-icon.svg" alt="network-icon" width="35" height="35"/>
                    </a>
                    <a href="https://vk.com/">
                      <img className="linkNetwork__icon" src="img/vk-icon.svg" alt="network-icon" width="35" height="35"/>
                    </a>
                    <a href="https://ru-ru.facebook.com/">
                      <img className="linkNetwork__icon" src="img/facebook-icon.svg" alt="network-icon" width="35" height="35"/>
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
                    <div className="allAutoTop">
                    <h1 className="allAuto__title">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все автомобили:'}</h1>
                    <div className="searchContainer">
                    <img className="searcImg" src="img/search_icon.svg" alt="search-icon"/>
                    <input className="searchCarInput" onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск по названию автомобиля..."/>
                    {searchValue && (<img className="removeImg" onClick={() => setSearchValue('')} src="img/remove_icon.svg" alt="remove-icon"/>)} {/*Кнопка будет отображаться только тогда, когда мы что-то ввели в input*/}
                    </div>
                    </div>
                    
                        {/* Мы фильтруем карточки по названию автомобиля (carName), при этом переводим в нижний регистр для лучшего поиска */}
                        {cardComfortAuto.filter(item => item.carName.toLowerCase().includes(searchValue)).map((item, index) => (
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

                    {cardSportAuto.filter(item => item.carName.toLowerCase().includes(searchValue)).map((item, index) => (
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
        </div> 
    );
}

export default Home;