class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :content
  # has_one :whiteboard
end
