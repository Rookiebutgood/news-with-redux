import { connect } from 'react-redux';

function NewsArticle({ article, user }) {
  const isShow = article.isApproved || article.author === user.username || user.role === 'admin';
  return (
    <>
    { isShow &&
      <div className="newsArticle">
      <h2 className="newsArticle__title">{article.title}</h2>
      <span className="newsArticle__date">{article.date}</span>
      <p className="newsArticle__text">{article.text}</p>
      { user.role === 'admin' &&
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
    }
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps, null)(NewsArticle)