class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio
end
