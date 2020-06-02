import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSelectPage } from './shop-select.page';

describe('ShopSelectPage', () => {
  let component: ShopSelectPage;
  let fixture: ComponentFixture<ShopSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
