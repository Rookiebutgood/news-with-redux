import { connect } from 'react-redux';

function NewsArticle({ article, isAuth }) {
  return (
    <div className="newsArticle">
      <h2 className="newsArticle__title">{article.title}</h2>
      <span className="newsArticle__date">{article.date}</span>
      <p className="newsArticle__text">{article.text}</p>
      { isAuth &&
        <div>
          {article.isApproved ? 
            <span>Одобрено</span>
            :
            <button>Одобрить</button>
          }
          <button>Удалить</button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, null)(NewsArticle)