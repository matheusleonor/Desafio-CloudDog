import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProdutoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProdutoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-http'`, () => {
    const fixture = TestBed.createComponent(ProdutoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-http');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ProdutoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-http!');
  });
});
