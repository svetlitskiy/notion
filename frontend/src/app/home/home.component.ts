import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorInterface } from '../../../../common/interfaces/error.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { regex } from '../share/regex';

const MAX_INT_VALUE = 2147483647;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public maxIdValue: number = MAX_INT_VALUE;

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _apiService: ApiService,
    private readonly _router: Router,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._createForm();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  public send(): void {
    if (this.form.valid) {
      const postId: number = this.form.value.id;
      this._apiService.getPost(postId).pipe(
        takeUntil(this._destroy$),
      ).subscribe(
        () => this._router.navigate(['/detail', postId]),
        (data: Partial<{error: ErrorInterface}>) => {
          console.error(data);
          this._snackBar.open(data.error.error);
        }
      )
    }
  }

  private _createForm(): void {
    this.form = this._fb.group({
      id: [null, [Validators.required, Validators.min(1), Validators.max(MAX_INT_VALUE), Validators.pattern(regex.numbers)]],
    });
  }

  get id(): AbstractControl {
    return this.form.get('id');
  }

}
