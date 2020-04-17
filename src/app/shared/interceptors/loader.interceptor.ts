import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent
} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(private loaderService: LoaderService, private toastrService: ToastrService) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);

        }
        // console.log(i, this.requests.length);
        this.loaderService.loaderStatus.next(this.requests.length > 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requests.push(req);
        this.loaderService.loaderStatus.next(true);
        return Observable.create(observer => {
            const subscription = next.handle(req)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(req);
                            observer.next(event);
                        }
                    },
                    err => { 
                        this.removeRequest(req); observer.error(err); 
                        // this.toastrService.error('Something went wrong please try again after some time.', 'Request Error.', {
                        //     timeOut: 3000
                        // });
                    },
                    () => { this.removeRequest(req); observer.complete(); });
            // teardown logic in case of cancelled requests
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}



