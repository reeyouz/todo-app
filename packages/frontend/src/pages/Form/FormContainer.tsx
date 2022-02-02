import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { Todo } from "../../types/Todo";
import { useDispatch } from "react-redux";
import { putTodo, useAppDispatch } from "../../store";

export type FormContainerProps = {
  initialState: Todo;
};
export function FormContainer(props: FormContainerProps) {
  const { initialState } = props;
  const dispatch = useAppDispatch();
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
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await dispatch(putTodo(values)).unwrap();
    setState(initialState);
  };

  return <Form values={values} onChange={onChange} onSubmit={onSubmit} />;
}
