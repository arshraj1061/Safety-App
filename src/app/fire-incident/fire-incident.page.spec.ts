import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireIncidentPage } from './fire-incident.page';

describe('FireIncidentPage', () => {
  let component: FireIncidentPage;
  let fixture: ComponentFixture<FireIncidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireIncidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireIncidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
