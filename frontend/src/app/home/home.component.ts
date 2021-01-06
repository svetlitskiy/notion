import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public send(): void {
    this.apiService.getPost(5).pipe().subscribe(
      (data: any) => {
        console.log('data', data);
      },
      (err: any) => {
        console.log('err', err);
      }
    )
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: [],
    });
  }

}
