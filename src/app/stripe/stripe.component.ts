import { Component, OnInit} from '@angular/core';
//  card detail
// 4242 4242 4242 4242
// 09 / 24
// 343

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  paymentHandler: any = null;
  success: boolean = false  
  failure:boolean = false
  constructor() {}

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_IKRdFF5Yjm9oezdYdBnnR7VI00B2ragwDq',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
               console.log(stripeToken)
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_IKRdFF5Yjm9oezdYdBnnR7VI00B2ragwDq',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

}



// response object

// {
//   "id": "card_1KHwf3Ke9VC1PiYQXbKmE80q",
//   "object": "card",
//   "address_city": null,
//   "address_country": null,
//   "address_line1": null,
//   "address_line1_check": null,
//   "address_line2": null,
//   "address_state": null,
//   "address_zip": null,
//   "address_zip_check": null,
//   "brand": "Visa",
//   "country": "US",
//   "cvc_check": "unchecked",
//   "dynamic_last4": null,
//   "exp_month": 9,
//   "exp_year": 2024,
//   "funding": "credit",
//   "last4": "4242",
//   "name": "dhiraj.siswa.mishra@gmail.com",
//   "tokenization_method": null
// },
// client_ip: "103.109.217.161"
// created: 1642193174
// email: "dhiraj.siswa.mishra@gmail.com"
// id: "tok_1KHwf4Ke9VC1PiYQ2YNSvqkB"
// livemode: false
// object: "token"
// type: "card"
// used: false