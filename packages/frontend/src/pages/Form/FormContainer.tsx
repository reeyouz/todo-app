import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { Todo } from "../../types/Todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store";

export type FormContainerProps = {
  initialState: Todo;
};
export function FormContainer(props: FormContainerProps) {
  const { initialState } = props;
  const dispatch = useDispatch();
  const [values, setState] = useState<Todo>(initialState);
  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => {
    const { type, name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type == "checkbox" ? !prevState.isComplete : value,
    }));
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addTodo(values));
    setState(initialState);
  };

  return <Form values={values} onChange={onChange} onSubmit={onSubmit} />;
}
