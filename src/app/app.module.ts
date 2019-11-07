import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, WelcomeComponent, AboutComponent, ProjectsComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
