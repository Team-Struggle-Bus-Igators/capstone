class RemoveColumnDateFromPosts < ActiveRecord::Migration[7.0]
  def change
    remove_columns(:posts, :date)
  end
end
