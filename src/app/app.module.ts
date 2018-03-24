import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { PaySubmitComponent } from './routers/pay-submit/pay-submit.component';
import { PaySubmit1Component } from './routers/pay-submit1/pay-submit1.component';
import { HttpServiceService } from './services/http-service.service';
import { AlertComponent } from './alert/alert/alert.component';

export const ROUTES: Routes = [
  { path: '', component: PaySubmit1Component },
	{ path: 'paySubmit/:RId', component: PaySubmitComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PaySubmitComponent,
    PaySubmit1Component,
    AlertComponent
  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot(ROUTES),
     FormsModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     HttpModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
