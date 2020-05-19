const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schemas
const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "Tell me something about yourself"
  }
})

// Models
const Task = mongoose.model("Task", taskSchema);
const User = mongoose.model("User", userSchema);


const main = async () => {
  // Create new task and save it
  const newTask = new Task({ name: "New Task", message: "🎉" });
  const chores = new Task({ name: "Chores", message: "Clean the garden" })
  const dishes = new Task({ name: "Dishes", message: "You should clean up the dishes" })
  const reading = new Task({ name: "Reading", message: "You should be reading to stay educated" })
  const sleeping = new Task({ name: "Sleeping", message: "Humans needs sleep too" })
  const eating = new Task({ name: "Eating", message: "You may die without food" })

  sleeping.save();
  reading.save();
  dishes.save();
  chores.save();
  eating.save();
  newTask.save();

  // Find one Task
  const goFind = await Task.findOne({ message: "You may die without food" });


  // Delete one task
  Task.Task.deleteOne({ name: "Eating" })

};
const person = async () => {

  const newUser = new User({ name: "Emin", age: 27, description: "Hello I'am Emin" })
  newUser.save();

  const findMe = await User.findOne({ name: "Emin" })
  console.log(findMe);

}

mongoose
  .connect("mongodb://localhost:27017/fbw21", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(person, main)
  .finally(() => {
    //res.send()
    mongoose.connection.close();
  });
