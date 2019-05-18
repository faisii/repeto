json.extract! post, :id, :title, :content, :tag_id, :category_id, :original, :translation, :created_at, :updated_at
json.url post_url(post, format: :json)
