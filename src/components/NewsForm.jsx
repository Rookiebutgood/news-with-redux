import { useState } from 'react';
import { connect } from 'react-redux';
import { addNews } from '../redux/actions';

function NewsForm({ user, addNews }) {
  let [title, setTitle] = useState('');
  let [text, setText] = useState('');

  return(
    <div className="newsForm">
      <input type="text" onChange= {e=>setTitle(e.target.value)}/>
      <textarea onChange= {e=>setText(e.target.value)}></textarea>
      <input 
        type="submit"
        value="Отправить" 
        onClick={()=>addNews(title, text, 'today', user.username)}
      />
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
    addNews: (title, text, date, author) => dispatch(addNews(title, text, date, author))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsForm)