import { APP_ROUTES } from '../../app.routes';
import { FileNode } from '../models/file-node.model';

export const FILE_TREE: FileNode[] = [
  {
    id: 'root',
    label: 'src',
    type: 'folder',
    children: [
      {
        id: 'readme',
        label: 'README.md',
        type: 'file',
        route: APP_ROUTES.readme,
        icon: 'bootstrapFiletypeMd',
      },
      {
        id: 'experience',
        label: 'experience.ts',
        type: 'file',
        route: APP_ROUTES.experience,
        icon: 'bootstrapTypescript',
      },
      {
        id: 'skills',
        label: 'skills.json',
        type: 'file',
        icon: 'bootstrapFiletypeJson',
      },
      {
        id: 'projects-folder',
        label: 'projects',
        type: 'folder',
        children: [
          {
            id: 'angular-cv',
            label: 'angular-cv.md',
            type: 'file',
            icon: 'bootstrapFiletypeMd',
          },
          {
            id: 'rc-manager',
            label: 'rc-manager.md',
            type: 'file',
            icon: 'bootstrapFiletypeMd',
          },
        ],
      },
    ],
  },
];
