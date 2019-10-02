class CreateThoughts < ActiveRecord::Migration[6.0]
  def change
    create_table :thoughts do |t|
      t.string :content
      t.belongs_to :whiteboard, null: false, foreign_key: true
    end
  end
end
