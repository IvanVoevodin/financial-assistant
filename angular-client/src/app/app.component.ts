import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Router } from '@angular/router'

interface RouteLink {
  readonly name: string
  readonly link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public routes: RouteLink[] = [
    {
      name: 'Link 1',
      link: '/link1'
    },
    {
      name: 'Link 2',
      link: '/link2'
    }
  ]

  constructor(private readonly router: Router) {}

  public _navigateTo(route: RouteLink): void {
    this.router.navigateByUrl(route.link)
  }
}
