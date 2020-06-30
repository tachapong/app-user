import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-delivery-cancel-confirm',
  templateUrl: './delivery-cancel-confirm.page.html',
  styleUrls: ['./delivery-cancel-confirm.page.scss'],
})
export class DeliveryCancelConfirmPage implements OnInit {

  public title: string = "ยกเลิกคำสั่งซื้อ";
  public hasLoaded: string;
  public fg: FormGroup;
  private mcontentid = "637290989025115094";
  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'heading': [null, Validators.required],
      'info': null,
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(this.fg.valid);
  }

  ngOnInit() {
  }

  OnSubmit() {
    console.log("ok");

  }


}
