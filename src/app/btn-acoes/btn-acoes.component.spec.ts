import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAcoesComponent } from './btn-acoes.component';

describe('BtnAcoesComponent', () => {
  let component: BtnAcoesComponent;
  let fixture: ComponentFixture<BtnAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
