import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '@api/api.service';
import { debounceTime, switchMap } from 'rxjs/operators';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPost', () => {
    const mock = { id: 5, userId: 1, title: 'Title', body: 'Body' };

    service.getPost(5).subscribe(data => {
      expect(data.title).toBe('Title');
      expect(data.userId).toBe(1);
      expect(data.id).toBe(5);
      expect(data.body).toBe('Body');
    });

    const req = httpMock.expectOne(`/api/posts/5`);
    expect(req.request.method).toBe('GET');
    req.flush(mock);

  });

  it('getPost with cash', () => {
    const mock = { id: 5, userId: 1, title: 'Title', body: 'Body' };

    service.getPost(5).pipe(
      debounceTime(1000),
      switchMap(() => service.getPost(5)),
    ).subscribe(data => {
      expect(data.title).toBe('Title');
      expect(data.userId).toBe(1);
      expect(data.id).toBe(5);
      expect(data.body).toBe('Body');
    });


    const req = httpMock.expectOne(`/api/posts/5`);
    expect(req.request.method).toBe('GET');
    req.flush(mock);

  });

  afterEach(() => {
    httpMock.verify();
  });

});
