import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    //optional: pass interface as argument to dispatch(generic function)
    //helps prevent errors when there is a lot going on in the function
    dispatch<FetchTodosActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
