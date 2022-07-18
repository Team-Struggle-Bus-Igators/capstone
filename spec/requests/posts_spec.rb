require 'rails_helper'

RSpec.describe "Posts", type: :request do
  user = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

  
  describe "GET /index" do
    user.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      date: "2020-01-28 05:40:30",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )

    it 'returns a list of posts' do
      get '/posts'
      posts = JSON.parse(response.body)
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do
    it 'can create a post' do
      post_params = {
        post: {
          post_type: "Projects",
          image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
          unit: "Unit 6: Ruby on Rails",
          topic: "Desk",
          author: "Me",
          content: "This is some content that needs about seventy five characters to submit so I think this is enough",
          date: "2020-01-28 05:40:30",
          cohort: "Charlie",
          link: "https://www.youtube.com/",
          user_id: user.id
        }
      }

      post '/posts', params: post_params

      expect(response).to have_http_status(200)
      post = Post.first
      expect(post['post_type']).to eq "Projects"
      expect(post['image']).to eq "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg"
      expect(post['unit']).to eq "Unit 6: Ruby on Rails"
      expect(post['topic']).to eq "Desk"
      expect(post['author']).to eq "Me"
      expect(post['content']).to eq "This is some content that needs about seventy five characters to submit so I think this is enough"
      expect(post['cohort']).to eq "Charlie"
      expect(post['link']).to eq "https://www.youtube.com/"
      expect(post['user_id']).to eq user.id
    end
  end

  describe "PATCH /update" do
    it 'can update a post' do
      edit_params = {
        post: {
          post_type: "Projects",
          image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
          unit: "Unit 6: Ruby on Rails",
          topic: "Chicken here",
          author: "Me",
          content: "This is some content that needs about seventy five characters to submit so I think this is enough",
          date: "2020-01-28 05:40:30",
          cohort: "Charlie",
          link: "https://www.youtube.com/",
          user_id: user.id
        }
      }

      lastPost = Post.last
      lastPostId = lastPost.id
      
      patch "/posts/#{lastPostId}", params: edit_params
      editedLastPost = Post.last
      expect(response).to have_http_status(200)
      expect(editedLastPost.topic).to eq 'Chicken here'
    end
  end

  describe "DELETE /destroy" do
    it 'can delete a post' do
      postOne = Post.first
      postOneId = postOne.id
      postLengthAfterDelete = Post.all.length - 1

      delete "/posts/#{postOneId}"
      expect(response).to have_http_status(200)
      expect(Post.all.length).to eq postLengthAfterDelete
    end
  end
end
