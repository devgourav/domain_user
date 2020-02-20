import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/common/services/domain.service';
import { Domain, SearchWord } from '../../common/models/domain.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/common/services/header.service';
import { SearchWordService } from 'src/app/common/services/search-word.service';
import { Category } from 'src/app/common/models/category.model';
import { CategoryService } from 'src/app/common/services/category.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  domains: Domain[] = [];
  hotDomains: Domain[] = [];
  newDomains: Domain[] = [];
  featuredDomains: Domain[] = [];

  searchForm: FormGroup;
  categories: Category[] = [];
  faChevronDown = faChevronDown;


  constructor(
    private domainService: DomainService,
    private router: Router,
    private fb: FormBuilder,
    private headerService: HeaderService,
    private searchWordService: SearchWordService,
    private categoryService: CategoryService
  ) { }


  ngOnInit() {
    this.getDomainDetails();
    this.getHotDomainDetails();
    this.getNewDomainDetails();
    this.getFeatureDomainDetails();

    this.fetchCategories();

    this.searchForm = this.fb.group({
      term: ["", Validators.required]
    })
    this.headerService.changeMessage(true);
  }


  fetchCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }


  getDomainDetails() {
    this.domainService.getFeaturedDomains().subscribe((response) => {
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

  getFeatureDomainDetails() {
    this.domainService.getFeaturedDomains().subscribe((response) => {
      this.featuredDomains = response;
      console.log("getFeatureDomains->", this.featuredDomains);
    })
  }

  getNewDomainDetails() {
    this.domainService.getNewDomains().subscribe((response) => {
      this.newDomains = response;
      console.log("getNewDomains->", this.newDomains);
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
