require 'rails_helper'

RSpec.describe "Posts", type: :request do
  user = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

  describe "GET /index" do
    user2 = User.where(email: ‘test2@gmail.com’).first_or_create(password: ‘123123’, password_confirmation: ‘123123’)
    const props = {
      posts: [
        {
          id: 1,
          type: 2,
          image: "nil",
          unit: 1,
          topic: "JavaScript Arrays",
          author: "John Doe",
          content: "What is an index you ask? Index's are the place holders inside of arrays. For example, Inside of an array as such, var num = [7, 9, 10, 11], index 0 would be equal to 7, index 1 would be equal to 9 and so on. So, we can use those index positions to call on which number/s we would like to use in our code",
          date: "2020-01-28 05:40:30",
          cohort: "Charlie 2020",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        }
      ] 
    }
  end

  describe "POST /create" do
    it 'can create a post' do
      post_params = {
        post_type: 1,
        image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
        unit: 6,
        topic: "Desk",
        author: "Me",
        content: "This is some content that needs about seventy five characters to submit so I think this is enough",
        date: "2020-01-28 05:40:30",
        cohort: "Charlie",
        link: "https://www.youtube.com/",
        user_id: user.id
      }

      post '/posts', params: post_params

      expect(response).to have_http_status(200)
      post = Post.first
      expect(post['post_type']).to eq 1
      expect(post['image']).to eq "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg"
      expect(post['unit']).to eq 6
      expect(post['topic']).to eq "Desk"
      expect(post['author']).to eq "Me"
      expect(post['content']).to eq "This is some content that needs about seventy five characters to submit so I think this is enough"
      expect(post['date']).to eq "2020-01-28 05:40:30"
      expect(post['cohort']).to eq "Charlie"
      expect(post['link']).to eq "https://www.youtube.com/"
      expect(post['user_id']).to eq user.id
    end
  end
end
