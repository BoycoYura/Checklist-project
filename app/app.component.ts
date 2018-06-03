import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';

class Todo{
	constructor(public title: string,
				public completed: boolean = false){}
}

const todos = [
	{
		title: 'Изучить JavaScript',
	 	completed: true
	},
	{
		title: 'Изучить Angular 2',
	 	completed: false
	},
	{
		title: 'Написать приложение',
	 	completed: false
	}
];

@Component({
	moduleId : module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'] 
})

export class AppComponent{
	title: string = 'Angular 2 Check list';
	todos: Todo[] = todos;
	newTodoTitle : string = '';

	toggle(todo:any){
		// console.log('toggle', todo);
		todo.completed = !todo.completed;
	}

	delete(todo: any){
		let index = this.todos.indexOf(todo);

		if(index > -1){
			this.todos.splice(index,1);
		}
	}

	create(){
		let todo: Todo = new Todo(this.newTodoTitle);

		this.todos.push(todo);
		this.newTodoTitle='';
	}
}