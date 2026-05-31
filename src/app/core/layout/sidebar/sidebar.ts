import { Component, output } from '@angular/core';
import { FILE_TREE } from '../../config/navigation.config';
import { FileTreeItem } from '../../../shared/file-tree-item/file-tree-item';

@Component({
  selector: 'app-sidebar',
  imports: [FileTreeItem],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  protected readonly fileTree = FILE_TREE;
  public readonly fileSelected = output<void>();

  protected handleFileSelected(): void {
    this.fileSelected.emit();
  }
}
