import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, DialogModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AI.Home.Solutions';
  protected privacyDialogVisible = false;

  protected openPrivacyDialog(): void {
    this.privacyDialogVisible = true;
  }

  protected closePrivacyDialog(): void {
    this.privacyDialogVisible = false;
  }
}
