export interface TodoInitialState {
  todos: TodoType[];
}

export interface TodoType {
  id: number;
  content: string;
}

export interface todoProps {
  todoProps: TodoType;
}
