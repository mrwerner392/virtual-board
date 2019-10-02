# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_02_205728) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "doodle_dots", force: :cascade do |t|
    t.integer "x_coord"
    t.integer "y_coord"
    t.bigint "whiteboard_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["whiteboard_id"], name: "index_doodle_dots_on_whiteboard_id"
  end

  create_table "quotes", force: :cascade do |t|
    t.string "content"
    t.bigint "whiteboard_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["whiteboard_id"], name: "index_quotes_on_whiteboard_id"
  end

  create_table "thoughts", force: :cascade do |t|
    t.string "content"
    t.bigint "whiteboard_id", null: false
    t.index ["whiteboard_id"], name: "index_thoughts_on_whiteboard_id"
  end

  create_table "to_dos", force: :cascade do |t|
    t.string "content"
    t.bigint "whiteboard_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["whiteboard_id"], name: "index_to_dos_on_whiteboard_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "whiteboards", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_whiteboards_on_user_id"
  end

  add_foreign_key "doodle_dots", "whiteboards"
  add_foreign_key "quotes", "whiteboards"
  add_foreign_key "thoughts", "whiteboards"
  add_foreign_key "to_dos", "whiteboards"
  add_foreign_key "whiteboards", "users"
end
