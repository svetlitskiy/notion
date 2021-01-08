import { NgModule } from '@angular/core';
import { MaterialModule } from '@share/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports: [
      MaterialModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
})
export class ShareModule {
}
