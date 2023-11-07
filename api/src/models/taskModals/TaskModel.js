import TaskSchema from "./TaskSchema.js";
// add task to db
export const addTask = (obj) => {
  return TaskSchema(obj).save();
};

// get all the task from task model
export const getTask = () => {
  return TaskSchema.find();
};
export const updateTask = ({ _id, type }) => {
  return TaskSchema.findByidAndUpdate(_id, { type });
};

// @ids is any array
export const deleteTasks = ({ ids }) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
