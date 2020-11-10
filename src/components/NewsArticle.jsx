import { connect } from 'react-redux';
import { approveNews, deleteNews } from '../redux/actions';
import '../style/NewsArticle.scss'

function NewsArticle({ article, user, newsId, approve, remove }) {
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
            <button onClick={()=>approve(newsId)}>Одобрить</button>
          }
          <button onClick={()=>remove(newsId)}>Удалить</button>
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

const mapDispatchToProps = dispatch => {
  return {
    approve: (id) => dispatch(approveNews(id)),
    remove: (id) => dispatch(deleteNews(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsArticle)