import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-receive-confirm',
  templateUrl: './delivery-receive-confirm.page.html',
  styleUrls: ['./delivery-receive-confirm.page.scss'],
})
export class DeliveryReceiveConfirmPage implements OnInit {

  public fg: FormGroup;
  public rating: number;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'rating': null,
      'note': null,
    })
    
  }
  
  ngOnInit() {
  }
  
  showRating(rate: number) {
    this.rating = rate;
    this.fg.get('rating').setValue(this.rating);    
  }

  handleSubmit(){
    console.log(this.fg.get('rating').value);
    console.log(this.fg.get('note').value);
  }

}
