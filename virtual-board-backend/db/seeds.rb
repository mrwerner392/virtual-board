# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Whiteboard.destroy_all

kenny = User.create(name: "Kenny", age: 31, bio: "Lifelong gamer learning to code")
matt = User.create(name: "Matt", age: 27, bio: "Sportzzzz")

kenny.whiteboard = Whiteboard.create(title: "Kenny's Awesome Board")
matt.whiteboard = Whiteboard.create(title: "Matt's Spectacular Board")

kenny.whiteboard.to_dos << ToDo.create(content: "laundry")
kenny.whiteboard.to_dos << ToDo.create(content: "game")

matt.whiteboard.to_dos << ToDo.create(content: "sleep")
matt.whiteboard.to_dos << ToDo.create(content: "drink bud light")

kenny.whiteboard.quotes << Quote.create(content: '"Forgiveness is divine, but never pay full price for late pizza" -Michaelangelo')
kenny.whiteboard.quotes << Quote.create(content: '"I am a great eater of beef, and I belief it does harm to my wit" -Shakespeare')
matt.whiteboard.quotes << Quote.create(content: '"That checks out" -Me')
matt.whiteboard.quotes << Quote.create(content: '"Take a shower" -Eric')

kenny.whiteboard.thoughts << Thought.create(content: "what is this?")
kenny.whiteboard.thoughts << Thought.create(content: "why is javaScript?")
matt.whiteboard.thoughts << Thought.create(content: "Time is a flat circle.")
matt.whiteboard.thoughts << Thought.create(content: "Uhhhhhh")
