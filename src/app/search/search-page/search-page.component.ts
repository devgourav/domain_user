import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/common/services/domain.service';
import { Domain } from '../../common/models/domain.model';
import { Category } from 'src/app/common/models/category.model';
import { CategoryService } from 'src/app/common/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Filter {
  label: string;
  type: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  domains: Domain[] = [];
  categories: Category[] = [];
  allDomains: Domain[] = [];
  searchTerm: string;
  isAllCategory: boolean = true;

  maxLength: number = 0;
  minLength: number = 0;
  lengthFilterValue: number = 0;

  maxAmount: number = 0;
  minAmount: number = 0;
  amountFilterValue: number = 0;

  filters: Filter[] = [
    { label: "Relevant", type: "r" },
    { label: "Lowest Price", type: "lp" },
    { label: "Highest Price", type: "hp" },
    { label: "Longest Name", type: "ln" },
    { label: "Shortest Name", type: "sn" }
  ];

  constructor(
    private domainService: DomainService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDomainDetails();
    this.getCategoryDetails();

    this.route.paramMap.subscribe(params => {
      this.searchTerm = params.get("term");
      if (this.searchTerm) {
        this.getSearchDomainDetails(this.searchTerm);
        console.log("getDomainDetails::route->", this.searchTerm);
      }
    });


  }

  getDomainDetails() {
    this.domainService.getDomains().subscribe((response) => {
      this.domains = response;
      this.allDomains = response;


      this.maxLength = this.allDomains.reduce((prev, curr) => {
        return (prev.name.length > curr.name.length) ? prev : curr;
      }).name.length;

      this.minLength = this.allDomains.reduce((prev, curr) => {
        return (prev.name.length < curr.name.length) ? prev : curr;
      }).name.length;

      this.lengthFilterValue = this.maxLength;


      this.maxAmount = +this.allDomains.reduce((prev, curr) => {
        return (prev.salePrice > curr.salePrice) ? prev : curr;
      }).salePrice;

      this.minAmount = +this.allDomains.reduce((prev, curr) => {
        return (prev.salePrice < curr.salePrice) ? prev : curr;
      }).salePrice;

      console.log("getDomainDetails->", this.maxAmount);
      console.log("getDomainDetails->", this.minAmount);

      this.amountFilterValue = this.maxAmount;
    })
  }

  getSearchDomainDetails(term: string) {

    this.domainService.getDomains().subscribe((response) => {
      this.domains = response;

      this.domains = this.domains.filter(domain => {
        let keywords = domain.keyWords.map(keyword => keyword.toLowerCase());
        if (domain.name.toLowerCase().includes(term.toLowerCase()) || keywords.includes(term.toLowerCase())) {
          return true;
        }
      });
      console.log("getSearchDomainDetails->", this.domains);
    })
  }


  filterDomainsOnLength(event) {


    let length = event.value;
    console.log("filterDomainsOnLength->", length);

    this.domains = this.allDomains.filter(domain => {
      return domain.name.length <= length;
    });


  }

  filterDomainsOnPrice(event) {


    let price = event.value;
    console.log("filterDomainsOnPrice->", price);

    this.domains = this.allDomains.filter(domain => {
      return domain.salePrice <= price;
    });


  }


  getCatDomainDetails(categoryName: string) {

    this.isAllCategory = false;


    this.domains = this.allDomains.filter(domain => {
      return domain.category.some(
        cat => {
          let x = cat.name.toLowerCase() == categoryName.toLowerCase();
          return x;
        }
      )
    });
    console.log("getCatDomainDetails->", this.domains);


  }

  getCategoryDetails() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
      this.categories = this.categories.map(category => {
        let newCategory = category;
        let name = category.name;
        newCategory.name = name[0].toUpperCase() + name.slice(1);
        return newCategory;
      });
      console.log("getDomainDetails->", this.categories);
    })
  }

  searchDomains(event) {
    console.log("searchDomains->", event);
    this.getSearchDomainDetails(event);
  }

  addFilters(event) {
    console.log("addFilters->event", event.target.value);

    let filter = event.target.value;

    switch (filter) {
      case "lp":
        this.domains = this.domains.sort((domain1, domain2) => {
          if (domain1.price > domain2.price) {
            return 1;
          }
          if (domain1.price < domain2.price) {
            return -1;
          }
        })
        break;
      case "hp":
        this.domains = this.domains.sort((domain1, domain2) => {
          if (domain1.price > domain2.price) {
            return -1;
          }
          if (domain1.price < domain2.price) {
            return 1;
          }
        })
        break;
      case "ln":
        this.domains = this.domains.sort((domain1, domain2) => {
          if (domain1.name.length > domain2.name.length) {
            return -1;
          }
          if (domain1.name.length < domain2.name.length) {
            return 1;
          }
        })
        break;

      case "sn":
        this.domains = this.domains.sort((domain1, domain2) => {
          if (domain1.name.length > domain2.name.length) {
            return 1;
          }
          if (domain1.name.length < domain2.name.length) {
            return -1;
          }
        })
        break;
      case "r":
        this.domains = this.domains.sort((domain1, domain2) => {
          if (domain1.creationDate > domain2.creationDate) {
            return -1;
          }
          if (domain1.creationDate < domain2.creationDate) {
            return 1;
          }
        })
        break;
    }

  }



  openDomainDetail(id) {
    console.log("openDomainDetail->", id);
    this.router.navigateByUrl("/domain/" + id);
  }

}
