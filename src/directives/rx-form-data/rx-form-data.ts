import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

/**
 * The RxFormDataDirective directive.
 *
 * ใช้สำหรับดึงข้อมูล Reactive Form มาใช้แบบ Reactive
 */
@Directive({
  selector: '[rx-form-data]' // Attribute selector
})
export class RxFormDataDirective {

  @Input('rx-form-data')
  set data(val: any) {
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    }
  }
  constructor(private formGroupDirective: FormGroupDirective) {
    console.log('Hello RxFormDataDirective Directive');
  }

}
