import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PetiteaveSharedModule } from 'app/shared/shared.module';
import { PetiteaveCoreModule } from 'app/core/core.module';
import { PetiteaveAppRoutingModule } from './app-routing.module';
import { PetiteaveHomeModule } from './home/home.module';
import { PetiteaveEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PetiteaveSharedModule,
    PetiteaveCoreModule,
    PetiteaveHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PetiteaveEntityModule,
    PetiteaveAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PetiteaveAppModule {}
