import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/common/services/domain.service';
import { Domain } from '../../common/models/domain.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  domains: Domain[] = [];
  searchForm: FormGroup;


  constructor(
    private domainService: DomainService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.getDomainDetails();

    this.searchForm = this.fb.group({
      term: ["", Validators.required]
    })

  }




  getDomainDetails() {
    this.domainService.getDomains().subscribe((response) => {
      this.domains = response;
      console.log("getDomainDetails->", this.domains);
    })
  }

  openDomainDetail(id) {
    console.log("openDomainDetail->", id);
    this.router.navigateByUrl("/domain/" + id);
  }

  submitSearchForm() {
    let term = this.searchForm.get("term").value;
    this.router.navigateByUrl("/search/" + term);
  }

}
