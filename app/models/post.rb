class Post < ApplicationRecord
    validates :post_type, :unit, :topic, :author, :content, :cohort, presence: true
    validates :image, length: { minimum: 8 }
    validates :content, length: {minimum: 75}
    belongs_to :user
    has_many :comments
    enum post_type: { Projects: 1, Notes: 2 }
    enum unit: { 'Unit 1: JS Introduction': 1, 'Unit 2: JS Foundations': 2, 'Unit 3: React': 3, 'Unit 4: Ruby': 4, 'Unit 5: Intro to Postgres and Ruby on Rails Models': 5, 'Unit 6: Ruby on Rails': 6, 'Unit 7: Professional Development Week': 7, 'Unit 8: Cat Tinder! Combining React and Rails': 8, 'Unit 9: React in Rails and Authentication': 9, 'Unit 10: Capstone Project, MVP': 10, 'Unit 11: Capstone Project, Icebox': 11 }
end
