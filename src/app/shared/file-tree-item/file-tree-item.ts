import { Component, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FileNode } from '../../core/models/file-node.model';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-file-tree-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon],
  templateUrl: './file-tree-item.html',
  styleUrl: './file-tree-item.css',
})
export class FileTreeItem {
  public readonly node = input.required<FileNode>();
  public readonly depth = input(0);
  public readonly fileSelected = output<void>();

  protected readonly expanded = signal(true);

  protected toggle(): void {
    if (this.node().type === 'folder') {
      this.expanded.update((v) => !v);
    }
  }

  protected selectFile(): void {
    this.fileSelected.emit();
  }
}
