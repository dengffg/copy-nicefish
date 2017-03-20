import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';

import {appRoutes} from './app.routes';
import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ForgetPwdComponent,
    EChartOptionDirective1,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    UserLoginService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
