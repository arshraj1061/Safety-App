import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaturalDisasterPage } from './natural-disaster.page';

describe('NaturalDisasterPage', () => {
  let component: NaturalDisasterPage;
  let fixture: ComponentFixture<NaturalDisasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalDisasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalDisasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
