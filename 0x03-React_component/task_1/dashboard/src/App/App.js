import { Component } from 'react';
import Notification from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      logOut: () => { },
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out')
      this.state.logOut()
    }
  }
  render() {

    const { isLoggedIn } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ]

    return (
      <>
        <Notification />
        <div className='App'>
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    )
  }
}

// App.defaultProps = {
//   logOut: () => { }
// }

export default App;
