# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Post.create([
  {
    post_type: 1,
    image: "https://static.fully.com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/f/u/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg",
    unit: 1,
    topic: "Desk",
    author: "Me",
    content: "This is some content that needs about seventy five characters to submit so I think this is enough",
    date: "2020-01-28 05:40:30",
    cohort: "Charlie",
    link: "https://www.youtube.com/",
    user_id: 1,
  },
  {
    post_type: 2,
    image: "https://images.unsplash.com/photo-1603205431143-ce58f21799a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    unit: 2,
    topic: "Learning",
    author: "Team",
    content: "This is some content that needs about seventy five characters to submit so I think this is enough",
    date: "2020-03-28 05:40:30",
    cohort: "Charlie",
    link: "https://www.youtube.com/",
    user_id: 1,
  },
  {
    post_type: 1,
    image: "https://images.unsplash.com/photo-1580457619081-ad98e54f58cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    unit: 3,
    topic: "morning essentials",
    author: "Team",
    content: "This is some content that needs about seventy five characters to submit so I think this is enough",
    date: "2020-07-28 05:40:30",
    cohort: "Charlie",
    link: "https://www.youtube.com/",
    user_id: 1,
  },
  { 
    post_type: 2,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    unit: 4,
    topic: "Favorite language",
    author: "Team",
    content: "This is some content that needs about seventy five characters to submit so I think this is enough",
    date: "2020-07-28 05:40:30",
    cohort: "Charlie",
    link: "https://www.youtube.com/",
    user_id: 1, 
  },
  {
    post_type: 1,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    unit: 5,
    topic: "Helping others",
    author: "Team",
    content: "This is some content that needs about seventy five characters to submit so I think this is enough",
    date: "2020-10-28 05:40:30",
    cohort: "Charlie",
    link: "https://www.youtube.com/",
    user_id: 1,
  },
])


p "creating #{Post.count} posts"
