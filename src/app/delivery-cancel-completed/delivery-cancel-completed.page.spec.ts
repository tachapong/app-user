import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryCancelCompletedPage } from './delivery-cancel-completed.page';

describe('DeliveryCancelCompletedPage', () => {
  let component: DeliveryCancelCompletedPage;
  let fixture: ComponentFixture<DeliveryCancelCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCancelCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryCancelCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
