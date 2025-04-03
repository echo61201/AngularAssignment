import { Route } from '@angular/router';

export interface PrerenderRoute extends Route {
  getPrerenderParams?: () => any[];
}
