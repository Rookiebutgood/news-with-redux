import NewsArticle from './NewsArticle';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';

 function News({ articles }) {
   let [articlesList, setArticlesList] = useState([])

   useEffect(() => {
     let tempArticles = []
     articles.forEach((el, i) => {
      tempArticles.push(<NewsArticle article={el} key={i} newsId={i}/>)
     });
     setArticlesList(tempArticles)
   }, [articles])
  return (
    <div>
      <NewsForm />
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