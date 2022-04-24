import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmergencyContactsPage } from './emergency-contacts.page';

describe('EmergencyContactsPage', () => {
  let component: EmergencyContactsPage;
  let fixture: ComponentFixture<EmergencyContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
