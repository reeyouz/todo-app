import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { FormContainer } from "./FormContainer";
import { Provider } from "react-redux";
import { transformDate } from "../../utils";
import { getStore } from "../../store";
import { Todo } from "../../types";

const initialState: Todo = {
  title: "",
  description: "",
  dueDate: transformDate(new Date()),
  isComplete: false,
};
const store = getStore();
const Component = () => (
  <Provider store={store}>
    <FormContainer initialState={initialState} />
  </Provider>
);

test("addition of a todo", () => {
  render(<Component />);
  fireEvent.type(
    screen.getByRole("textbox", { name: "Title" }),
    "Grocery shopping"
  );
  fireEvent.type(
    screen.getByRole("textbox", { name: "Description" }),
    "apples, organges and potatoes"
  );
  fireEvent.type(
    screen.getByRole("textbox", { name: "Due Date" }),
    "2022-08-23"
  );
  fireEvent.type(screen.getByRole("checkbox", { name: "Is Complete" }), "true");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue(
    initialState.title
  );
  expect(screen.getByRole("textbox", { name: "Description" })).toHaveValue(
    initialState.description
  );
  expect(
    screen.getByRole("checkbox", { name: "Is Complete" })
  ).not.toBeChecked();
  // const todos = store.getState().todos.todos;
  // expect(todos).toHaveLength(1);
  // expect(todos[0].title).toBe("Grocery shopping");
  // expect(todos[0].isComplete).toStrictEqual(true);
});
