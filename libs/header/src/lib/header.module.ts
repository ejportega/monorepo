import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
