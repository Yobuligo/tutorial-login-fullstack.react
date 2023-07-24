import { ITodoCardProps } from "./ITodoCardProps";

export const TodoCard: React.FC<ITodoCardProps> = (props) => {
  return (
    <>
      {props.todo.text}({props.todo.id})
    </>
  );
};
