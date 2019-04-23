import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { localeFr } from '@angular/common/locales/fr';
//import { localeFrExtra } from '@angular/common/locales/extra/fr';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { RoutesModule } from './modules/routes/routes.module';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServicesComponent } from './components/components/services/services.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { DevelopmentViewComponent } from './components/development-view/development-view.component';
import { IntegrationViewComponent } from './components/integration-view/integration-view.component';
import { ConseilViewComponent } from './components/conseil-view/conseil-view.component';
import { CarouselComponent } from './components/components/carousel/carousel.component';
import { PanelComponent } from './components/components/panel/panel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServicesComponent,
    FooterComponent,
    HomeViewComponent,
    DevelopmentViewComponent,
    IntegrationViewComponent,
    ConseilViewComponent,
    CarouselComponent,
    PanelComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
 //registerLocaleData(localeFr,'fr',localeFrExtra);

}
