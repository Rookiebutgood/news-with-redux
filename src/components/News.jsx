import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NewsArticle from './NewsArticle';
import NewsForm from './NewsForm';

import '../style/News.scss';

 function News({ articles, user }) {
   let [articlesList, setArticlesList] = useState([]);

   useEffect(() => {
     let tempArticles = [];
     articles.filter((el) => {
      return el.isApproved || el.author === user.username || user.role === 'admin';
    })
    .forEach((el, i) => {
      tempArticles.push(<NewsArticle article={ el } key={ i } newsId={ i } />)
     });
     setArticlesList(tempArticles);
   }, [articles, user])

   function search(value) {
    let tempArticles = [];
    articles.filter(el => {
      return el.title.includes(value) || el.text.includes(value)
    })
    .forEach((el, i) => {
      tempArticles.push(<NewsArticle article={ el } key={ i } newsId={ i } />)
     });
     setArticlesList(tempArticles);
   }

  return (
    <div className="news">
      <input
        type="text"
        placeholder="Поиск по новостям"
        className="news__search"
        onChange={ e => search(e.target.value) }
      />
      { user.isAuth && <NewsForm /> }
      { articlesList }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.news,
    user: state.auth
  }
}

export default connect(mapStateToProps, null)(News)