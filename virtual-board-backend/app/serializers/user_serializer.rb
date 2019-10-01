class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio
  has_one :whiteboard
end
