/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'Dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'Users',
        title: 'Users',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/users'
    },

    {
        id   : 'config',
        title: 'Configurations',
        type : 'collapsable',
        icon : 'heroicons_outline:cog',
        children:[
            
            {
                id      : 'categorie',
                title   : 'Categorie Service',
                type    : 'basic',
                link    : '/config'
            },

            {
                id      : 'Specialite',
                title   : 'Specialite Service',
                type    : 'basic',
                link    : '/specialite'
            }
        
        ]
    }
 
];


