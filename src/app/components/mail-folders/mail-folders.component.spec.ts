import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MailFoldersComponent } from './mail-folders.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('MailFoldersComponent', () => {
  let component: MailFoldersComponent;
  let fixture: ComponentFixture<MailFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailFoldersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
