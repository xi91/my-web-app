import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingLogComponent } from './watching-log.component';

describe('WatchingLogComponent', () => {
  let component: WatchingLogComponent;
  let fixture: ComponentFixture<WatchingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
