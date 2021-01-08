import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostInterface } from '@common/interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface CashItemInterface {
  data: any;
  updateTimestamp: number;
}

const apiCacheTime = 1000 * 60 * 3; // 3 minutes

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  public cash: Map<string, CashItemInterface> = new Map();

  constructor(
    private http: HttpClient
  ) {}

  public getPost(id: number): Observable<PostInterface> {
    const cashKey = `getPost_${id}`;
    const cashData = this.getCashData(cashKey);

    return cashData ? of(cashData.data) : this.http.get<PostInterface>('/api/posts/' + id).pipe(
      tap((data: PostInterface) => this.setCashDate(cashKey, data)),
    );
  }

  private getCashData(key: string): CashItemInterface {
    const cash: CashItemInterface = this.cash.get(key);

    this.clearCash();

    if (cash?.updateTimestamp) {
      return cash;
    }
  }

  private setCashDate(key: string, data: any): void {
    this.cash.set(key, {data, updateTimestamp: new Date().getTime()});
  }

  private clearCash(): void {
    this.cash.forEach((item: CashItemInterface, key: string) => {
      if (item.updateTimestamp && apiCacheTime < new Date().getTime() - item.updateTimestamp) {
        this.cash.delete(key);
      }
    });
  }


}
