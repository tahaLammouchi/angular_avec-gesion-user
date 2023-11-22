import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { AddVideogameComponent } from './add-videogame/add-videogame.component';
import { UpdateVideogameComponent } from './update-videogame/update-videogame.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ListeOfusersComponent } from './liste-ofusers/liste-ofusers.component';
import { AddRoleForUserComponent } from './add-role-for-user/add-role-for-user.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesComponent,
    AddVideogameComponent,
    UpdateVideogameComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeGenresComponent,
    UpdateGenreComponent,
    ListeOfusersComponent,
    AddRoleForUserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
 providers: [{ provide : HTTP_INTERCEPTORS,
  useClass : TokenInterceptor,
   multi : true}
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }

