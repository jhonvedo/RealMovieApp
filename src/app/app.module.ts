import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserFormComponent } from './user-management/user-form/user-form.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Angular Material Components

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';

import { ShowDetailComponent } from './show-detail/show-detail.component';
import { WrapperPageComponent } from './wrapper-page/wrapper-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ShowListComponent } from './component/show-list/show-list.component';
import { LazyLoadImageModule,intersectionObserverPreset  } from 'ng-lazyload-image';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ToastrModule} from 'ngx-toastr';
import { CustomInterceptor } from './services/custom-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent   ,
    UserManagementComponent,
    UserFormComponent,
    UserListComponent,
    ShowDetailComponent,
    WrapperPageComponent,
    ShowListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,   
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    }),
    NgxMaterialTimepickerModule,
    ToastrModule.forRoot() ,

    MatBadgeModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LayoutModule
  ],
 
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
