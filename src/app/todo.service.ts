export class TodoService {
    data = {
        todoList: []
    }

    addTodo(value) {
        this.data.todoList.push(value);
    }

    removeTodo(value) {
        this.data.todoList.splice(this.data.todoList.indexOf(value), 1);
    }
}