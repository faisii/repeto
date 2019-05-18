class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.references :tag, foreign_key: true
      t.references :category, foreign_key: true
      t.text :original
      t.text :translation

      t.timestamps
    end
  end
end
