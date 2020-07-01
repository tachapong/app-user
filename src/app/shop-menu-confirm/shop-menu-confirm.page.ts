import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-menu-confirm',
  templateUrl: './shop-menu-confirm.page.html',
  styleUrls: ['./shop-menu-confirm.page.scss'],
})
export class ShopMenuConfirmPage implements OnInit {

  public title: string = "";
  public hasLoaded: string;
  private mcontentid = "637290987131938444";
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  constructor(private userSvc: UserService, private svc: IonManaLib, private fb: FormBuilder) {
    (<any>window).submitProductForm = () => this.onSubmit();
    this.fg = this.fb.group({
      'options': null,
    });
    
    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.formData$ = load$;
    load$.then(it => {
      this.title = it.product?.name;
      this.svc.initPageApi(this.mcontentid);
      this.svc.validForm(this.fg.valid);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
