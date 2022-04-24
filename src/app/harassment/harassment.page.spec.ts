import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarassmentPage } from './harassment.page';

describe('HarassmentPage', () => {
  let component: HarassmentPage;
  let fixture: ComponentFixture<HarassmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarassmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarassmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
