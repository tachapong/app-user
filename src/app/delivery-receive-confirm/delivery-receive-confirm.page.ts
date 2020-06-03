import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-receive-confirm',
  templateUrl: './delivery-receive-confirm.page.html',
  styleUrls: ['./delivery-receive-confirm.page.scss'],
})
export class DeliveryReceiveConfirmPage implements OnInit {

  public fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'rating': null,
      'note': null,
    })
    
  }
  
  ngOnInit() {
  }
  
  rating(rating: number) {
    this.fg.get('rating').setValue(rating);    
  }

  handleSubmit(){
    console.log(this.fg.get('rating').value);
    console.log(this.fg.get('note').value);
  }

}
