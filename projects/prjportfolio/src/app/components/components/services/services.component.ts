import { Component, DoCheck} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements DoCheck {

  isChildRouteLoaded = false;

  itemsArray = [
{id:1 , name: 'Developpement', description: 'On this page you will find examples of cards', link: '/services/development' },
{ id: 2, name: 'Integration', description: 'On this page you will find examples of cards', link: '/services/integration' },
{id:3 , name: 'Conseil', description: 'On this page you will find examples of cards', link: '/services/conseil' },
//{ id: 4, name: 'Conseils', description: 'On this page you will find examples of cards', link: '/components/cards' },
//{id:5 , name: 'Architecture', description: 'On this page you will find examples of cards', link: '/components/cards' },
//{ id: 6, name: 'Etc.', description: 'On this page you will find examples of cards', link: '/components/cards' }
];


  constructor(private router: ActivatedRoute) { }

  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}

