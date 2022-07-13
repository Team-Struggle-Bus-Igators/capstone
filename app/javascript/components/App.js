import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PostEdit from './pages/PostEdit'
import PostNew from './pages/PostNew'
import PostProtectedIndex from './pages/PostProtectedIndex'
import PostIndex from './pages/PostIndex'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'


class App extends Component {
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/postindex" component={PostIndex} />
          <Route path="/postprotectedindex" component={PostProtectedIndex} />
          <Route path="/postnew" component={PostNew} />
          <Route path="/postedit" component={PostEdit} />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App