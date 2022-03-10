import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Form } from "./Form";
import { Todo } from "../../types/Todo";
import { usePutTodoMutation } from "../../store";
import { transformDate } from "../../utils";

export type FormContainerProps = {
  initialState?: Todo;
};
export function FormContainer(props: FormContainerProps) {
  const {
    initialState = {
      title: "",
      description: "",
      dueDate: transformDate(new Date()),
      isComplete: false,
    },
  } = props;
  const [values, setState] = useState<Todo>(initialState);
  const [putTodoApi] = usePutTodoMutation();
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
    await putTodoApi(values);
    // await dispatch(putTodo(values)).unwrap();
    setState(initialState);
  };

  return <Form values={values} onChange={onChange} onSubmit={onSubmit} />;
}
