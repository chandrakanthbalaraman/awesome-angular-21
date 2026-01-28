import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Zap, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('awesome-angular-21');
  protected readonly sidebarOpen = signal(true);

  // Lucide icons
  protected readonly icons = {
    menu: Menu,
    close: X,
    zap: Zap,
    externalLink: ExternalLink,
  };

  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
}
