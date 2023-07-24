import { ITodoListProps } from "./ITodoListProps";
import { TodoCard } from "./TodoCard";

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const items = props.todos.map((todo) => (
    <div key={todo.id}>
      <TodoCard todo={todo} />
    </div>
  ));

  return <>{items}</>;
};
