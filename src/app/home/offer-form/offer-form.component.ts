import { Component, OnInit, Input } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { MailService } from 'src/app/common/services/mail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {

  mailOfferForm: FormGroup;
  @Input() domainName: string;

  constructor(
    private fb: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
    private mailService: MailService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.mailOfferForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNo: [""],
      offer: [""],
      message: [""]
    });


  }

  sendMail() {

    let mailData: MailData = {
      name: this.mailOfferForm.get("name").value,
      email: this.mailOfferForm.get("email").value,
      phoneNo: this.mailOfferForm.get("phoneNo").value,
      offer: this.mailOfferForm.get("offer").value,
      message: this.mailOfferForm.get("message").value,
      domain: this.domainName
    }
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        console.log("CAPTCHA VERIFIED SUCCESSFULLY!!!");
        this.mailService.sendMail(mailData)
          .pipe(first())
          .subscribe((response) => {

            this.mailOfferForm.reset();
            this.snackBar.open('Mail Send to Namoyo Support', '', {
              duration: 2000
            });
            console.log("Mail Response Success", response);


          }, error => {
            console.log("Mail sent Error", error);
          })
      });
  }

}


interface MailData {
  name: string;
  email: string;
  phoneNo?: string;
  offer?: number;
  message?: string;
  domain: string;
}