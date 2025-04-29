import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ← ici, corrigé
})
export class AppComponent {
  title = 'MyToDoList Version Angular';
}
