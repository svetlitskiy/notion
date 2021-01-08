import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { FormBuilder } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '@api/api.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  const apiService = {
    getPost: jasmine.createSpy('getPost').and.returnValue(of({userId: 2, id: 3, title: 'Title', body: 'Body'}))
  };

  const activatedRoute = {
    params: of({postId: 3})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ DetailComponent ],
      providers: [ FormBuilder, {
        provide: ApiService,
        useValue: apiService
      }, {
        provide: ActivatedRoute,
        useValue: activatedRoute,
      } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(apiService.getPost).toHaveBeenCalledWith(3);
  });
});
