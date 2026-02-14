import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Wish } from './wish/wish';
import { Gifts } from './gifts/gifts';
import { Quize } from './quize/quize';
import { Letter } from './letter/letter';
import { Gallery } from './gallery/gallery';
import { Love } from './love/love';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'wish', component: Wish },
    { path: 'gifts', component: Gifts },
    { path: 'quize', component: Quize },
    { path: 'letter', component: Letter },
    { path: 'gallery', component: Gallery },
    { path: 'love', component: Love }
];
