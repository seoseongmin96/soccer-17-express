import dotenv from 'dotenv'
import mongoose from 'mongoose'
import User2Model from './user2Model.js'
import todoModel from './todoModel.js'
import TodoModel from './todoModel.js'



mongoose.Promise = global.Promise
const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new User2Model(mongoose)
db.Todo = new TodoModel(mongoose)
//db.todo = require('./todo.model')(mongoose)
export default db
