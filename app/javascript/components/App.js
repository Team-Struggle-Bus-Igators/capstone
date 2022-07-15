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
      posts: []
    }
  }

  componentDidMount = () => {
    this.readPost()
  }

  readPost = () => {
    fetch("/posts")
    .then(response => response.json())
    .then(postArr => this.setState({posts: postArr}))
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
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/postindex" render={() => <PostIndex posts={this.state.posts}/> } />
          <Route path="/postprotectedindex" component={PostProtectedIndex} />
          <Route path="/postshow/:id" render={(props) => {
            let id = props.match.params.id
            let post = this.state.posts.find(post => post.id === +id)
            return <PostShow post={post} deletePost={this.deletePost} />
            }} />
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