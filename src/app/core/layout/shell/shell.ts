import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Tabbar } from '../tabbar/tabbar';

@Component({
  selector: 'app-shell',
  imports: [NgClass, RouterLink, RouterOutlet, Sidebar, Tabbar],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  protected isMobileSidebarOpen = false;

  protected openMobileSidebar(): void {
    this.isMobileSidebarOpen = true;
  }

  protected closeMobileSidebar(): void {
    this.isMobileSidebarOpen = false;
  }

  protected handleSidebarSelect(): void {
    this.closeMobileSidebar();
  }
}
