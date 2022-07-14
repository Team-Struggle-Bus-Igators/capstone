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
  constructor(props) {
    super(props)
    this.state = {
      listOfPosts: []
    }
  }

  createPost = (newPost) => {
    fetch("/posts", {
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })
    .then(response => response.json())
    // .then(payload => this.readPost())
    // The code above is commented out temporarily until we add our index
    .catch(err => console.log("Post create errors", err))
  }

  render() {
    const { current_user } = this.props
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/postindex" component={PostIndex} />
          <Route path="/postprotectedindex" component={PostProtectedIndex} />
          <Route path="/postnew" render={() => <PostNew {...this.props} createPost={this.createPost} /> }/>
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