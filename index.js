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
  newTask.save();

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
