import './App.scss';
import React, { Component } from 'react';
import news from './news.json';
import { Title, Content, Image, Special, Date, Cathegories, Link, Author } from './news-folder/index'

class App extends Component {
  render() {
    return(
      <div className="outer__container">
        { news.map(el => (
          <div className="news__container" key={ el.id }>
            <h2 className="news__title">
              <Title title={ el.title }/>
            </h2>
            <div className="news__content">
              <Content content={ el.content }/>
            </div>
            <>
            <Special isSpecial={ el.isSpecial }/>
            </>
            <p className="news__date">
              <Date dateCreated={ el.dateCreated }/>
            </p>
            <Cathegories categories={ el.categories }/>
            <Link link={ el.link }/>
            <div className="news__image-container">
              <Image photo={ el.photo }/>
            </div>
            <p className="news__author">
              <Author author={ el.author }/>
            </p>
          </div>
        )) }
      </div>
    )
  }  
}

export default App;
