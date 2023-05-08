import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

// Security
import { JwtInterceptorService } from './security/jwt-interceptor.service';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { UsersIndexComponent } from './security/users-index/users-index.component';

// Shared
import { GenericListComponent } from './shared/components/generic-list/generic-list.component';
import { InputImgComponent } from './shared/components/input-img/input-img.component';
import { InputMarkdownComponent } from './shared/components/input-markdown/input-markdown.component';
import { MultipleSelectorComponent } from './shared/components/multiple-selector/multiple-selector.component';
import { DisplayErrorsComponent } from './shared/components/display-errors/display-errors.component';

import { MenuComponent } from './menu/menu.component';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { FormGameComponent } from './games/form-game/form-game.component';
import { IndexGamesComponent } from './games/index-games/index-games.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GenericListComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MultipleSelectorComponent,
    DisplayErrorsComponent,
    AuthorizeViewComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationFormComponent,
    UsersIndexComponent,
    CreateGameComponent,
    EditGameComponent,
    FormGameComponent,
    IndexGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
