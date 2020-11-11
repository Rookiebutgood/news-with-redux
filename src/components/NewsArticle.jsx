import { connect } from 'react-redux';
import { approveNews, deleteNews } from '../redux/actions';

import CustomButton from './CustomButton';

import '../style/NewsArticle.scss'

function NewsArticle({ article, newsId, user, approve, remove }) {
  
  return (
      <div className="newsArticle">
      <h2 className="newsArticle__title">{ article.title }</h2>
      <span className="newsArticle__date">{ article.date }</span>
      <p className="newsArticle__text">{ article.text }</p>
      { user.role === 'admin' &&
        <div className="newsArticle__controls">
          { article.isApproved ? 
            <span className="newsArticle__approveText">Одобрено</span>
            :
            <CustomButton
              label="Одобрить"
              className="newsArticle__approveButton"
              onClick={ () => approve(newsId) }
            />
          }
          <CustomButton
            label="Удалить"
            className="newsArticle__removeButton"
            onClick={ () => remove(newsId) }
          />
        </div>
      }
    </div>

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