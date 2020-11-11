import { connect } from 'react-redux';

import '../style/Home.scss';

function Home({ username }) {
  return (
    <div className="homePage">
      <h1 className="homePage__welcome">{ `Привет, ${username ? username : 'Гость'}` }</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapStateToProps, null)(Home)