import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaCadastro } from './categoria-cadastro';

describe('CategoriaCadastro', () => {
  let component: CategoriaCadastro;
  let fixture: ComponentFixture<CategoriaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
