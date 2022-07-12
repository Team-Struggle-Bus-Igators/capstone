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


class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/postindex" component={PostIndex} />
          <Route path="/postprotectedindex" component={PostProtectedIndex} />
          <Route path="/postnew" component={PostNew} />
          <Route path="/postedit" component={PostEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App