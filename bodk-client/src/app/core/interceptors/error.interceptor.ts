import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor( private toastrService:ToastrService, private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
        .pipe(
            catchError((err:HttpErrorResponse) => {
            if (err.status === 401) {
                this.toastrService.error(err.error.description,'Error!');
                this.router.navigate(['/login']);
            }
            return throwError(err);
        }));
    }
}