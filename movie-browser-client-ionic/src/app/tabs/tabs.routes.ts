import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadComponent: () =>
          import('../feed/feed.component').then((m) => m.FeedComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../movie-search/movie-search.component').then((m) => m.MovieSearchComponent),
      },
      {
        path: 'watchlist',
        loadComponent: () =>
          import('../watchlist/watchlist.component').then((m) => m.WatchlistComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full',
  },
];
