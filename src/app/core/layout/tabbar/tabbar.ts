import { afterNextRender, Component, effect, ElementRef, signal, viewChild } from '@angular/core';

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

  // Custom scroll indicator state
  protected readonly thumbLeft = signal(0);
  protected readonly thumbWidth = signal(100);
  protected readonly hasOverflow = signal(false);

  private readonly scrollRef = viewChild<ElementRef<HTMLElement>>('scrollContainer');

  constructor() {
    afterNextRender(() => this.recalculate());

    // Recalculate when tabs change
    effect(() => {
      this.tabs();
      requestAnimationFrame(() => this.recalculate());
    });
  }

  protected selectTab(id: string): void {
    this.activeTabId.set(id);
  }

  protected onScroll(event: WheelEvent, container: HTMLElement): void {
    if (event.deltaY !== 0) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  }

  protected onScrollUpdate(container: HTMLElement): void {
    this.updateThumb(container);
  }

  private recalculate(): void {
    const el = this.scrollRef()?.nativeElement;
    if (el) this.updateThumb(el);
  }

  private updateThumb(el: HTMLElement): void {
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const overflow = scrollWidth > clientWidth;
    this.hasOverflow.set(overflow);

    if (!overflow) return;

    this.thumbWidth.set((clientWidth / scrollWidth) * 100);
    this.thumbLeft.set((scrollLeft / scrollWidth) * 100);
  }
}
