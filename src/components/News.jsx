import NewsArticle from './NewsArticle';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';
import '../style/News.scss';

 function News({ articles }) {
   let [articlesList, setArticlesList] = useState([])

   useEffect(() => {
     let tempArticles = [];
     articles.forEach((el, i) => {
      tempArticles.push(<NewsArticle article={el} key={i} newsId={i}/>)
     });
     setArticlesList(tempArticles);
   }, [articles])


   function search(value) {
    let tempArticles = [];
    articles.filter((el) => {
      return el.title.includes(value) || el.text.includes(value)
    })
    .forEach((el, i) => {
      tempArticles.push(<NewsArticle article={el} key={i} newsId={i}/>)
     });
     setArticlesList(tempArticles);
   }

  return (
    <div className="news">
      <NewsForm />
      <input type="text" onChange={e=>search(e.target.value)} />
      {articlesList}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.news
  }
}

export default connect(mapStateToProps, null)(News)