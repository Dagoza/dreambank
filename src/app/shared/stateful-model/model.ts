import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";


export class Model<T> {
  private _data: BehaviorSubject<T>;
  data$: Observable<T>;

  constructor(initialData: any, immutable: boolean, clone?: (data: T) => T) {
    this._data = new BehaviorSubject(initialData);
    this.data$ = this._data.asObservable()
      .pipe(map(data => immutable
        ? clone ? clone(data) : JSON.parse(JSON.stringify(data))
        : data)
        )
  }

  get(): T {
    return this._data.getValue();
  }

  set(data: T) {
    this._data.next(data);
  }
}

export class ModelFactory<T> {

  create(initialData: T): Model<T> {
    return new Model<T>(initialData, true);
  }

  createMutable(initialData: T): Model<T> {
    return new Model<T>(initialData, false);
  }

  createWithCustomClone(initialData: T, clone) {
    return new Model<T>(initialData, true, clone);
  }

}

export function useModelFactory() {
  return new ModelFactory();
}

export const MODEL_PROVIDER = {
  provide: ModelFactory, useFactory: useModelFactory
};