const { request } = useRequest()

/**
 * Todo item type.
 */
export interface TodoItem {
  /**
   * Todo item id.
   */
  id: number
  /**
   * Todo item title.
   */
  title: string
  /**
   * Todo item completed.
   *
   * @default false
   */
  completed: boolean
  /**
   * Todo item user id.
   */
  userId: number
}

/**
 * Todo list type.
 */
export type TodoList = TodoItem[]

/**
 * Get todo list.
 */
export function getTodoListApi() {
  return request.get<TodoList>('/todos')
}

/**
 * Get todo detail.
 *
 * @param id
 */
export function getTodoDetailApi(id: number) {
  return request.get<TodoItem>(`/todos`, {
    params: {
      id,
    },
  })
}

/**
 * Create todo item.
 *
 * @param todo
 */
export function createTodoItemApi(todo: TodoItem) {
  return request.post<TodoItem>('/todos', {
    data: todo,
  })
}

/**
 * Update todo item.
 *
 * @param todo
 */
export function updateTodoItemApi(todo: TodoItem) {
  return request.put<TodoItem>('/todos', {
    data: todo,
  })
}

/**
 * Delete todo item.
 *
 * @param id
 */
export function deleteTodoItemApi(id: number) {
  return request.delete(`/todos/${id}`)
}
