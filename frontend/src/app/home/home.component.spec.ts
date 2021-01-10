import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { FormBuilder } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ApiService } from '@api/api.service';
import { DetailComponent } from '../detail/detail.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const apiService = {
    getPost: jasmine.createSpy('getPost').and.returnValue(of({userId: 2, id: 3, title: 'Title', body: 'Body'}))
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule,  RouterTestingModule.withRoutes([
        { path: 'detail/:postId', component: DetailComponent },
      ]), NoopAnimationsModule],
      declarations: [ HomeComponent ],
      providers: [ FormBuilder, {
        provide: ApiService,
        useValue: apiService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('send', () => {
    component.form.get('id').setValue(3);
    component.send();
    expect(apiService.getPost).toHaveBeenCalledWith(3);
  });

});
