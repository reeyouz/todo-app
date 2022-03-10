import { Todo } from "../types";
import { transformDate } from "../utils";

export const sampleTodos: Todo[] = [
  {
    title: "Grocery Shopping",
    dueDate: transformDate(new Date("2022-02-05")),
    isComplete: true,
    description: "Apples, oranges and potatoes",
  },
  {
    title: "Call Ethan",
    dueDate: transformDate(new Date("2022-02-06")),
    isComplete: false,
    description: "Discuss design",
  },
  {
    title: "Dog grooming",
    dueDate: transformDate(new Date("2022-02-09")),
    isComplete: false,
  },
  {
    title: "Finish course",
    dueDate: transformDate(new Date("2022-02-11")),
    isComplete: false,
  },
];
