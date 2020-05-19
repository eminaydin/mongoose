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

// Models
const Task = mongoose.model("Task", taskSchema);

const main = async () => {
  // Create new task and save it
  const newTask = new Task({ name: "New Task", message: "🎉" });
  const chores = new Task({ name: "Chores", message: "Clean the garden" })
  const dishes = new Task({ name: "Dishes", message: "You should clean up the dishes" })
  const reading = new Task({ name: "Reading", message: "You should be reading to stay educated" })
  const sleeping = new Task({ name: "Sleeping", message: "Humans needs sleep too" })
  const eating = new Task({ name: "Eating", message: "You may die without food" })

  chores, dishes, reading, sleeping, eating, newTask.save();

  // Find one Task
  const goFind = await Task.findOne({ message: "Prio 1" });
  console.log(goFind);

  // Delete one task
};

mongoose
  .connect("mongodb://localhost:27017/fbw21", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(main)
  .finally(() => {
    //res.send()
    mongoose.connection.close();
  });
