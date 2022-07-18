import React, { Component } from 'react'
import {
  BrowserRouter as Router,
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
import ScrollToTop from './components/ScrollToTop'
import PostShow from './pages/PostShow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      location: null
    }
  }

  componentDidMount = () => {
    this.readPost()
  }

  readPost = () => {
    fetch("/posts")
      .then(response => response.json())
      .then(postArr => this.setState({ posts: postArr }))
      .catch(err => console.log("Post read errors", err))
  }

  createPost = (newPost) => {
    fetch("/posts", {
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readPost())
      .catch(err => console.log("Post create errors", err))
  }

  editPost = (post, id) => {
    fetch(`/posts/${id}`, {
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readPost())
    .catch(err => console.log("Post update errors:", err))
  }

  deletePost = (id) => {
    fetch(`/posts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readPost())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/postindex" render={() => <PostIndex posts={this.state.posts} />} />
          <Route path="/postprotectedindex" component={PostProtectedIndex} />
          <Route path="/postnew" render={() => <PostNew {...this.props} createPost={this.createPost} />} />
          <Route path="/postshow/:id" render={(props) => {
            let id = props.match.params.id
            return <PostShow id={id} {...this.props} deletePost={this.deletePost} />
            }} />
          <Route path="/postedit/:id" render={(props) => {
              let id = props.match.params.id
              let post = this.state.posts.find(post => post.id === +id)
              return <PostEdit post={post} editPost={this.editPost} />
            }} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/postshow" component={PostShow} />
          <Route component={NotFound} />
        </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    )
  }
}

export default App