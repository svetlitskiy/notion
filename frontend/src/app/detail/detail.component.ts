import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '@api/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { EMPTY, Observable, Subject } from 'rxjs';
import { PostInterface } from '@common/interfaces/post.interface';
import { ErrorInterface } from '@common/interfaces/error.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  public post$: Observable<PostInterface>;

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private readonly _apiService: ApiService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _snackBar: MatSnackBar,
  ) { }

  public ngOnInit(): void {
    this.post$ = this._activatedRoute.params.pipe(
      map((params: Params) => +params?.postId),
      switchMap((postId: number) => this._apiService.getPost(postId)),
      takeUntil(this._destroy$),
      catchError((data: Partial<{error: ErrorInterface}>) => {
        console.error(data);
        this._snackBar.open(data.error?.error);
        return EMPTY;
      })
    );

  }


}
