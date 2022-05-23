import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-natural-disaster',
  templateUrl: './natural-disaster.page.html',
  styleUrls: ['./natural-disaster.page.scss'],
})
export class NaturalDisasterPage implements OnInit {

  public text: string;
  public from: string;
  public to: string;
  
  constructor(private http: HttpClient, private alert: AlertController) { }

  public sendSms() {
    const payload = new HttpParams()
      .set('from', this.from)
      .set('to', this.to)
      .set('text', this.text);

    return this.http.post('http://sms.com:3000/send-sms', payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.alert.create({ message: 'Oops!'})
            .then((alert) => alert.present());
          return throwError('Oops!');
        }))
      .subscribe(async (resp: any) => {
        const alert = await this.alert.create({ message: resp.message });
        await alert.present();
      });
  }

  ngOnInit() {
  }

}
