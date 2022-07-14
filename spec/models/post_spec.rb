require 'rails_helper'

RSpec.describe Post, type: :model do
  user2 = User.where(email: 'test2@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

  it 'will create a post' do
    user2.posts.create(
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
    posts = Post.all
    expect(posts.length).to eq 1
  end

  it 'will not create a post if any required field is empty' do
    post = user2.posts.create(
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      link: "https://www.youtube.com/",
    )

    expect(post.errors[:post_type]).to_not be_empty
    expect(post.errors[:unit]).to_not be_empty 
    expect(post.errors[:topic]).to_not be_empty 
    expect(post.errors[:author]).to_not be_empty 
    expect(post.errors[:content]).to_not be_empty 
    expect(post.errors[:date]).to_not be_empty 
    expect(post.errors[:cohort]).to_not be_empty 
  end

  it 'will not create a post if the content is not long enough' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      author: "Me",
      content: "This ",
      date: "2020-01-28 05:40:30",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:content]).to_not be_empty 
  end

  it 'will not create a post if the image address is not long enough' do
    post = user2.posts.create(
      post_type: 1,
      image: "https",
      unit: 6,
      topic: "Desk",
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      date: "2020-01-28 05:40:30",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:image]).to_not be_empty 
  end
end


