import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule,MatButtonModule,MatTooltipModule,MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatSortModule, MatSlideToggleModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule} from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule, MatOptionModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { UserIdleModule } from 'angular-user-idle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import {
  HashLocationStrategy,
  LocationStrategy,
  DatePipe,
  CommonModule,
} from "@angular/common";
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { LoaderComponent } from './layout/loader/loader.component';
import { IdleTimeoutPopupComponent } from './shared/idle-timeout-popup/idle-timeout-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    LoaderComponent,
    IdleTimeoutPopupComponent,
    IdleTimeoutPopupComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
    HttpClientModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatOptionModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    ModalModule.forRoot(),
    UserIdleModule.forRoot({idle: 2700, timeout: 15, ping: 5})
    // NgFlashMessagesModule.forRoot()
  ],
  exports:[
    MatSortModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatListModule,
    MatOptionModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    AuthGuard,
    CookieService
  ],
  entryComponents: [IdleTimeoutPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
