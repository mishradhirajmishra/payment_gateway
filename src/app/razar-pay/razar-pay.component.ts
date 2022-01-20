import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-razar-pay',
  templateUrl: './razar-pay.component.html',
  styleUrls: ['./razar-pay.component.scss'],
  providers: [ { provide: Window, useValue: window }]
})
export class RazarPayComponent implements OnInit {

  constructor(private window: Window) { }

  ngOnInit(): void {
  }

  options = {
    "key": "rzp_test_ILgsfZCZoFIKMb", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Merchant Name",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};


pay(){
  // console.log((this.window as any).Razorpay)
 let rzp1 = new (this.window as any).Razorpay(this.options);
  rzp1.open();
  rzp1.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
}
 

}
