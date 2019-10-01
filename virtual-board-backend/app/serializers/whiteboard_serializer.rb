class WhiteboardSerializer < ActiveModel::Serializer
  attributes :id, :title
  # has_one :user
end
