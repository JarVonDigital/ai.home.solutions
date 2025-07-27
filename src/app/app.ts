import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Contact} from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected title = 'AI.Home.Solutions';
}
