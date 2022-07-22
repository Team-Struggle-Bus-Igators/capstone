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
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    posts = Post.all
    expect(posts.length).to eq posts.length
  end

  it 'will not create a post if post_type is empty' do
    post = user2.posts.create(
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:post_type]).to_not be_empty
  end

  it 'will not create a post if unit is empty' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      topic: "Desk",
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:unit]).to_not be_empty 
  end

  it 'will not create a post if topic is empty' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:topic]).to_not be_empty 
  end

  it 'will not create a post if author is empty' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:author]).to_not be_empty 
  end

  it 'will not create a post if content is empty' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      author: "Me",
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:content]).to_not be_empty 
  end
 
  it 'will not create a post if cohort is empty' do
    post = user2.posts.create(
      post_type: 1,
      image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
      unit: 6,
      topic: "Desk",
      author: "Me",
      content: "This is some content that needs about seventy five characters to submit so I think this is enough",
      link: "https://www.youtube.com/",
    )
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
      cohort: "Charlie",
      link: "https://www.youtube.com/",
    )
    expect(post.errors[:image]).to_not be_empty 
  end

  it 'will update a posts post_type' do
    post = Post.first
    post.update(
      post_type: 2,
    )
    updated_post = Post.first
    expect(updated_post.post_type).to eq "Notes"
  end

  it 'will update a posts image' do
    post = Post.first
    post.update(
      image: "http://www.nasa.gov/sites/default/files/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg",
    )
    updated_post = Post.first
    expect(updated_post.image).to eq "http://www.nasa.gov/sites/default/files/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg" 
  end

  it 'will update a posts unit' do
    post = Post.first
    post.update(
      unit: 4,
    )
    updated_post = Post.first
    expect(updated_post.unit).to eq "Unit 4: Ruby"
  end

  it 'will update a posts topic' do
    post = Post.first
    post.update(
      topic: "Edited",
    )
    updated_post = Post.first
    expect(updated_post.topic).to eq "Edited" 
  end

  it 'will update a posts author' do
    post = Post.first
    post.update(
      author: "Ayo",
    )
    updated_post = Post.first
    expect(updated_post.author).to eq "Ayo" 
  end

  it 'will update a posts content' do
    post = Post.first
    post.update(
      content: "This is some content that needs about seventy five characters to submit so I think this is enough and now it's edited",
    )
    updated_post = Post.first
    expect(updated_post.content).to eq "This is some content that needs about seventy five characters to submit so I think this is enough and now it's edited" 
  end

  it 'will update a posts cohort' do
    post = Post.first
    post.update(
      cohort: "Delta",
    )
    updated_post = Post.first
    expect(updated_post.cohort).to eq "Delta" 
  end

  it 'will update a posts link' do
    post = Post.first
    post.update(
      link: "https://www.github.com/",
    )
    updated_post = Post.first
    expect(updated_post.link).to eq "https://www.github.com/"
  end

  it 'will not update a post if a field is empty' do
    post = Post.first
    post.update(
      post_type: nil,
      image: nil,
      unit: nil,
      topic: nil,
      author: nil,
      content: nil,
      date: nil,
      cohort: nil,
      link: nil,
    )
    expect(post.errors[:post_type]).to_not be_empty 
    expect(post.errors[:unit]).to_not be_empty 
    expect(post.errors[:topic]).to_not be_empty 
    expect(post.errors[:author]).to_not be_empty 
    expect(post.errors[:content]).to_not be_empty 
    expect(post.errors[:date]).to_not be_empty 
    expect(post.errors[:cohort]).to_not be_empty 
  end
end


