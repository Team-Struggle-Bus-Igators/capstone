class Comment < ApplicationRecord
    validates :remark, :user_id, :post_id, presence: true
    belongs_to :user
    belongs_to :post
end
