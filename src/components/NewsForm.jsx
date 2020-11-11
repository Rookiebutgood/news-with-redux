import { useState } from 'react';
import { connect } from 'react-redux';
import { addNews } from '../redux/actions';
import CustomButton from './CustomButton';
import '../style/NewsForm.scss';

function NewsForm({ user, addNews }) {
  let [showForm, setShowForm] = useState(false);
  let [title, setTitle] = useState('');
  let [text, setText] = useState('');

  return(
    <div className="newsForm">
      <CustomButton
        label={ showForm ? 'Скрыть' : 'Добавить новость' }
        className="newsForm__addButton"
        onClick={ () => setShowForm(prev => !prev) }
      />
      {showForm &&
        <div className="newsForm__form">
          <input
            type="text"
            placeholder="Заголовок"
            className="newsForm__input"
            onChange= { e => setTitle(e.target.value) }
          />
          <textarea 
            className="newsForm__textarea"
            placeholder="Текст новости"
            onChange= { e => setText(e.target.value) }
          />
          <CustomButton
            label="Добавить"
            className="newsForm__submitButton"
            onClick={ () => {
              addNews(title, text, user.username);
              setShowForm(false);
            } }
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
    addNews: (title, text, author) => dispatch(addNews(title, text, author))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsForm)