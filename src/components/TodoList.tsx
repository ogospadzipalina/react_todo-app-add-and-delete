import React from 'react';
import { Filter } from '../types/Filter';
import { Todo, TempTodo } from '../types/Todo';
import { SingleTodo } from './SingleTodo';

type TodoListProps = {
  filter: Filter;
  todos: Todo[];
  handleRemove: (todoId: number) => void;
  tempTodo: TempTodo | null;
  deletedTodoId: number | null;
};

export const TodoList: React.FC<TodoListProps>
= ({
  filter, todos, handleRemove, tempTodo, deletedTodoId,
}) => {
  const visibleTodos = () => {
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  };

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos().map(todo => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          tempTodo={tempTodo}
          deletedTodoId={deletedTodoId}
        />
      ))}
    </section>
  );
};
