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
  public listOptions = [];
  public remark: string = null;
  public data$ = Promise.resolve([]);
  constructor(private userSvc: UserService, private svc: IonManaLib, private fb: FormBuilder) {
    (<any>window).submitProductForm = () => this.onSubmit();
    this.fg = this.fb.group({
      'selectedOptions': null,
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
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
        // return this.userSvc.getProductDetail("637461992065224464")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  checkCheckbox(event: any, item: any) {
    if (!event.target.checked) {
      this.listOptions.push({
        'name': item.name,
        'value': item.value,
      });
    }
    else {
      let index = this.listOptions.findIndex(it => it.name == item.name);
      if (index >= 0) this.listOptions.splice(index, 1);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    let index = this.listOptions.findIndex(it => it.name == "mockremarkid");
    if (index >= 0) this.listOptions.splice(index, 1);
    if (this.remark) {
      this.listOptions.push({
        'name': "mockremarkid",
        'value': this.remark,
      })
    }
    this.fg.get('selectedOptions').patchValue(this.listOptions);
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
