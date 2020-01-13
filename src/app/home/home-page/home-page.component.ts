import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/common/services/domain.service';
import { Domain, SearchWord } from '../../common/models/domain.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/common/services/header.service';
import { SearchWordService } from 'src/app/common/services/search-word.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  domains: Domain[] = [];
  hotDomains: Domain[] = [];
  searchForm: FormGroup;



  constructor(
    private domainService: DomainService,
    private router: Router,
    private fb: FormBuilder,
    private headerService: HeaderService,
    private searchWordService: SearchWordService
  ) { }


  ngOnInit() {
    this.getDomainDetails();
    this.getHotDomainDetails();

    this.searchForm = this.fb.group({
      term: ["", Validators.required]
    })


    this.headerService.changeMessage(true);

  }




  getDomainDetails() {
    this.domainService.getFeauturedDomains().subscribe((response) => {
      this.domains = response;
      console.log("getFeauturedDomains->", this.domains);
    })
  }

  getHotDomainDetails() {
    this.domainService.getHotDomains().subscribe((response) => {
      this.hotDomains = response;
      console.log("getHotDomains->", this.hotDomains);
    })
  }

  openDomainDetail(id) {
    console.log("openDomainDetail->", id);
    this.router.navigateByUrl("/domain/" + id);
  }

  submitSearchForm() {
    let term = this.searchForm.get("term").value;

    const searchTerm: SearchWord = {
      term: term
    }
    this.searchWordService.setSearchWord(searchTerm);
    this.router.navigateByUrl("/search/" + term);
  }




}
