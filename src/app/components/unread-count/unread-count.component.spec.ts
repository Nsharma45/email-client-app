import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UnreadCountComponent } from './unread-count.component';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http';

describe('UnreadCountComponent', () => {
  let component: UnreadCountComponent;
  let fixture: ComponentFixture<UnreadCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnreadCountComponent],
      providers: [ClientService],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
