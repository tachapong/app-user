import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryReceiveConfirmPage } from './delivery-receive-confirm.page';

describe('DeliveryReceiveConfirmPage', () => {
  let component: DeliveryReceiveConfirmPage;
  let fixture: ComponentFixture<DeliveryReceiveConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryReceiveConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryReceiveConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
