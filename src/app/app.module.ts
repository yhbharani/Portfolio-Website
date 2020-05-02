import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { IamComponent } from './iam/iam.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { StarRatingComponent } from './skill/star-rating/star-rating.component';
import { ApartmentComponent } from './projects/apartment/apartment.component';
import { NullComponent } from './null/null.component';
import { ProjectsComponent } from './projects/projects.component';
import { NasaFontComponent } from './projects/nasa-font/nasa-font.component';
import { KharsaliComponent } from './projects/kharsali/kharsali.component';
import { GrihaComponent } from './projects/griha/griha.component';
import { PlasticComponent } from './projects/plastic/plastic.component';
import { SpaComponent } from './projects/spa/spa.component';
import { ContactComponent } from './contact/contact.component';
import { AquaComponent } from './projects/aqua/aqua.component';
import { DiceComponent } from './projects/dice/dice.component';
import { FooterComponent } from './footer/footer.component';
import { AchievmentComponent } from './achievment/achievment.component';
import { ArtworkComponent } from './artwork/artwork.component';

import { NgxGalleryModule } from 'ngx-gallery-9';
import { LandscapeComponent } from './projects/landscape/landscape.component';
import { DigitalComponent } from './artwork/digital/digital.component';
import { DestechComponent } from './projects/destech/destech.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    NavigationComponent,
    HeaderComponent,
    IntroComponent,
    IamComponent,
    NullComponent,
    SkillComponent,
    WorkComponent,
    EducationComponent,
    ExperienceComponent,
    StarRatingComponent,
    ApartmentComponent,
    ProjectsComponent,
    NasaFontComponent,
    KharsaliComponent,
    GrihaComponent,
    PlasticComponent,
    SpaComponent,
    ContactComponent,
    AquaComponent,
    DiceComponent,
    FooterComponent,
    AchievmentComponent,
    ArtworkComponent,
    LandscapeComponent,
    DigitalComponent,
    DestechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    NgxGalleryModule,
    ClickOutsideModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: NullComponent 
      },
      {
        path: 'project/:index', 
        component: ProjectsComponent 
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
