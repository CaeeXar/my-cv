import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Menubar } from '../menubar/menubar';
import { Tabbar } from '../tabbar/tabbar';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, Sidebar, Menubar, Tabbar],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {}
