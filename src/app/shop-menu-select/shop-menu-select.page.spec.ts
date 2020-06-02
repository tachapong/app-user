import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopMenuSelectPage } from './shop-menu-select.page';

describe('ShopMenuSelectPage', () => {
  let component: ShopMenuSelectPage;
  let fixture: ComponentFixture<ShopMenuSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenuSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopMenuSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
