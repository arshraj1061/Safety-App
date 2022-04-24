import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentPage } from './accident.page';

describe('AccidentPage', () => {
  let component: AccidentPage;
  let fixture: ComponentFixture<AccidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
