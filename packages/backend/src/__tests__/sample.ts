import { ObjectId } from "mongodb";

export default [
  {
    _id: new ObjectId(),
    title: "Buy groceries",
    dueDate: new Date("1-1-2022"),
  },
  {
    _id: new ObjectId(),
    title: "Exercise",
    dueDate: new Date("2-1-2022"),
  },
  {
    _id: new ObjectId(),
    title: "Call plumber",
    dueDate: new Date("3-1-2022"),
  },
  {
    _id: new ObjectId(),
    title: "Buy groceries",
    dueDate: new Date("1-1-2022"),
  },
];
