import { Component, signal } from '@angular/core';

interface TabItem {
  id: string;
  label: string;
  iconText: string;
  iconColor: string;
}

@Component({
  selector: 'app-tabbar',
  imports: [],
  templateUrl: './tabbar.html',
  styleUrl: './tabbar.css',
})
export class Tabbar {
  protected readonly tabs = signal<TabItem[]>([
    { id: 'experience', label: 'experience.ts', iconText: 'ts', iconColor: 'text-accent-pink' },
    { id: 'readme', label: 'README.md', iconText: 'md', iconColor: 'text-accent-cyan' },
    { id: 'skills', label: 'skills.json', iconText: 'json', iconColor: 'text-accent-orange' },
    { id: '1', label: 'experience.ts', iconText: 'ts', iconColor: 'text-accent-pink' },
    { id: '2', label: 'README.md', iconText: 'md', iconColor: 'text-accent-cyan' },
    { id: '3', label: 'skills.json', iconText: 'json', iconColor: 'text-accent-orange' },
    { id: '4', label: 'experience.ts', iconText: 'ts', iconColor: 'text-accent-pink' },
    { id: '5', label: 'README.md', iconText: 'md', iconColor: 'text-accent-cyan' },
    { id: '6', label: 'skills.json', iconText: 'json', iconColor: 'text-accent-orange' },
    { id: '7', label: 'experience.ts', iconText: 'ts', iconColor: 'text-accent-pink' },
    { id: '8', label: 'README.md', iconText: 'md', iconColor: 'text-accent-cyan' },
    { id: '9', label: 'skills.json', iconText: 'json', iconColor: 'text-accent-orange' },
  ]);

  protected readonly activeTabId = signal<string>('experience');

  protected selectTab(id: string): void {
    this.activeTabId.set(id);
  }

  protected onScroll(event: WheelEvent, container: HTMLElement): void {
    if (event.deltaY !== 0) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  }
}
