import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message = "Voici une nouvelle version de MyToDoList qui fonctionne maintenant sous ANGULAR";
  tasks: string[] = [];
  newTask: string = '';

  addtask() { 
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
