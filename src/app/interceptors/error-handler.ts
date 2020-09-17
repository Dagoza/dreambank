import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { MatSnackBar } from '@angular/material';
import { Observable, of, throwError } from "rxjs";
import {  catchError } from "rxjs/operators";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private _snackBar: MatSnackBar) {}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                        this._snackBar.open(
                            err.error.message?err.error.message:'Connection Error'
                            ,'', 
                            {
                             panelClass: ['red-snackbar'],
                             duration: 4000
                            });
                }
                return throwError(err);
            }));
      }
}

export const ErrorHandler = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  };