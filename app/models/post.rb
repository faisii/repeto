class Post < ApplicationRecord
  belongs_to :tag
  belongs_to :category

  def self.search category , tag
    query = ransack(category_name_eq: category, tag_name_eq: tag )
    query.result || []
  end
end
