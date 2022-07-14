require 'rails_helper'

RSpec.describe "Posts", type: :request do
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
end
