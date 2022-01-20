import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { StripeComponent } from './stripe/stripe.component';
import { RazarPayComponent } from './razar-pay/razar-pay.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PayPallComponent } from './pay-pall/pay-pall.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    GooglePayComponent,
    StripeComponent,
    RazarPayComponent,
    PaytmComponent,
    PayPallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule, 
     ReactiveFormsModule,
     GooglePayButtonModule,
     NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
