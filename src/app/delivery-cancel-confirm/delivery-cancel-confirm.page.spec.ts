import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryCancelConfirmPage } from './delivery-cancel-confirm.page';

describe('DeliveryCancelConfirmPage', () => {
  let component: DeliveryCancelConfirmPage;
  let fixture: ComponentFixture<DeliveryCancelConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCancelConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryCancelConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
