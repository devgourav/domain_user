import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/common/models/domain.model';
import { DomainService } from 'src/app/common/services/domain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/common/services/login.service';






@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.scss']
})
export class DomainDetailComponent implements OnInit {
  domain: Domain;
  domainId: string;
  faCheck = faCheck;



  constructor(
    private domainService: DomainService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.domainId = params.get("id");
      if (this.domainId) {
        this.fetchDomainById(this.domainId);
      }

    });


  }

  fetchDomainById(id) {
    this.domainService.getDomainById(id).subscribe(response => {
      this.domain = response;
      console.log("fetchDomainById->", this.domain);
    })
  }

  openPaymentPage(id) {

    this.loginService.ifUserLoggedIn().then(response => {
      if (response) {
        this.router.navigateByUrl("/payment/" + id);
        console.log("openPaymentPage->", id);
      } else {
        this.loginService.domainLogin();
      }
    })



  }

}
