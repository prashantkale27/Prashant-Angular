import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { BoldDirective } from './bold.directive';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule,Routes  } from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const route:Routes =[
// { path:"Home", component:HomeComponent},

{ path:"Home", component:HomeComponent} , // default routing if no path is set to route path configuaration object
{ path:"", redirectTo:'Home',pathMatch:'full'},
{ path:"Content", component:ContentComponent},
{ path:"signup", component:SignupComponent,children:[
  { path:"UTD", component:RegisterUtdComponent},
  { path:"URF", component:RegisterUrfComponent}

]},


{ path:"Pipes", component:PipesComponent},
{ path:"**", component:PageNotFoundComponent} // wild card routing , if path is not found then it will redirect to page not found component


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    BoldDirective,
    SignupComponent,
    RegisterUtdComponent,
    RegisterUrfComponent,
    PipesComponent,
    NavbarComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(), // External libarary from ngx libarbary
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
