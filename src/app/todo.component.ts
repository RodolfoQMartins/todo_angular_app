import { Component } from "@angular/core"
import { TodoService } from './todo.service'

export interface Todo {
    title: string;
    completed: boolean;
}

export interface AppData {
    todoList: Array<Todo>;
}

@Component({
    selector: "todo",
    template: `
        <div>{{ title }}</div>
        <input #newTodo type="text" placeholder="Add new todo.." 
        (keyup.enter)="addTodo(newTodo.value)">
        <ul>
            <li *ngFor="let todo of todoList" (click)="removeTodo(todo)">
                {{ todo }}
            </li>
        </ul>
    `
})

export class TodoComponent {
    title = "Todo List"
    todoList
    addTodo
    removeTodo

    constructor(service: TodoService) {
        this.todoList = service.data.todoList;
        this.addTodo = value => service.addTodo(value);
        this.removeTodo = value => service.removeTodo(value)
    }
}