class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :type
      t.string :image
      t.integer :unit
      t.string :topic
      t.string :author
      t.text :content
      t.date :date
      t.string :cohort
      t.text :link
      t.integer :user_id

      t.timestamps
    end
  end
end
