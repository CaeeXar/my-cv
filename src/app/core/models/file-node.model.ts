export interface FileNode {
  id: string;
  label: string;
  type: 'file' | 'folder';
  icon?: string;
  route?: string;
  children?: FileNode[];
}
