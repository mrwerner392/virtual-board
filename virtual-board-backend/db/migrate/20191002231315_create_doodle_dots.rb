class CreateDoodleDots < ActiveRecord::Migration[6.0]
  def change
    create_table :doodle_dots do |t|
      t.integer :x_coord
      t.integer :y_coord
      t.belongs_to :doodle, null: false, foreign_key: true
    end
  end
end
