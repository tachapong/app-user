import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-cancel-confirm',
  templateUrl: './delivery-cancel-confirm.page.html',
  styleUrls: ['./delivery-cancel-confirm.page.scss'],
})
export class DeliveryCancelConfirmPage implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'heading': [null, Validators.required],
      'info': null,
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log("ok");
    
  }

 
}
