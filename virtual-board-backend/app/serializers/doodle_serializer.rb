class DoodleSerializer < ActiveModel::Serializer
  attributes :id
  has_many :doodle_dots
end
