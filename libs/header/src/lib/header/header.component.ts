import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'monorepo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headingTitle!: string;
  @Output() sidebarToggled = new EventEmitter<void>();

  toggleSidebar(): void {
      this.sidebarToggled.emit();
  }
}
