import { Component } from '@angular/core';

import { AddemployeePage } from '../addemployee/addemployee';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddemployeePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
