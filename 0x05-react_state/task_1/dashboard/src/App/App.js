import { Component } from 'react';
import Notification from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      displayDrawer: false,
    };

    // Bind the functions in the constructor
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  }

  // Function to handle displaying the drawer
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true }, () => {
      console.log('Display drawer:', this.state.displayDrawer);
    });
  }

  // Function to handle hiding the drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  render() {

    const { isLoggedIn, displayDrawer } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ]

    return (
      <>
        <Notification
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          {
            isLoggedIn ?
              <BodySectionWithMarginBottom
                title="Course list"
                children={<CourseList listCourses={listCourses} />}
              /> :
              <BodySectionWithMarginBottom
                title="Log in to continue"
                children={<Login />}
              />
          }
          <BodySectionWithMarginBottom
            title="News from the School"
            children="Welcome to News Blog :)"
          />
          <Footer className={css(styles.AppFooter)} />
        </div>
      </>
    )
  }
}

// App.defaultProps = {
//   logOut: () => { }
// }

export default App;

const styles = StyleSheet.create({
  App: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  AppFooter: {
    borderTop: '2px solid #E0354B',
    marginTop: 'auto',
    padding: 10,
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
