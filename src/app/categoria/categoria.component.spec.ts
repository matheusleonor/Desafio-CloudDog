import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriaComponent } from './categoria.component';

describe('CategoriaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CategoriaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CategoriaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-http'`, () => {
    const fixture = TestBed.createComponent(CategoriaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-http');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CategoriaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-http!');
  });
});
