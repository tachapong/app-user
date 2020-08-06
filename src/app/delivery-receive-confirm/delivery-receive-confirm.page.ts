import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-delivery-receive-confirm',
  templateUrl: './delivery-receive-confirm.page.html',
  styleUrls: ['./delivery-receive-confirm.page.scss'],
})
export class DeliveryReceiveConfirmPage implements OnInit {

  public title: string = "คุณได้รับของแล้ว";
  public hasLoaded: string;
  private mcontentid = "637290989479516109";
  public data$ = Promise.resolve([]);
  public fg: FormGroup;
  public rating: number;
  constructor(private fb: FormBuilder, private userSvc: UserService, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'point': 0,
      'counsel': null,
    })

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    // this.data$ = load$;
    load$.then(it => {
      console.log(it);
      this.svc.initPageApi(this.mcontentid);
      // this.hasLoaded = it ? "y" : "n";
    });
    this.svc.validForm(this.fg.valid);
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        // return this.svc.getApiData(this.mcontentid);
      })
  }

  ngOnInit() {
  }

  showRating(rate: number) {
    this.rating = rate;
    this.fg.get('point').setValue(this.rating);
  }

  OnSubmit() {
    // console.log(this.fg.get('point').value);
    // console.log(this.fg.get('counsel').value);
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

}
