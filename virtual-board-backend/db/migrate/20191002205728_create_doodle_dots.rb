class CreateDoodleDots < ActiveRecord::Migration[6.0]
  def change
    create_table :doodle_dots do |t|
      t.integer :x_coord
      t.integer :y_coord
      t.belongs_to :whiteboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
