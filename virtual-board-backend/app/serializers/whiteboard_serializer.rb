class WhiteboardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :to_dos
  has_many :quotes
  has_many :thoughts
  has_one :doodle
end
