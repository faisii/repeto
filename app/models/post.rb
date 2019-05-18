class Post < ApplicationRecord
  belongs_to :tag
  belongs_to :category

  def self.search params
      posts = self
      posts = posts.where(category_id: params[:category]) unless params[:category].nil?
      posts = posts.where(tag_id: params[:tag]) unless params[:tag].nil?
      posts
  end
end
