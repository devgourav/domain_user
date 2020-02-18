import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/common/services/login.service';
import { faHamburger, faBars, faHeart, faStar, faArrowDown, faSortDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/common/services/header.service';
import { SearchWord } from 'src/app/common/models/domain.model';
import { SearchWordService } from 'src/app/common/services/search-word.service';
import { CategoryService } from 'src/app/common/services/category.service';
import { Category } from 'src/app/common/models/category.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  faBars = faBars;
  isCollapse = false;
  faHeart = faHeart;
  faStar = faStar;
  faChevronDown = faChevronDown;


  @Input() isSearch: boolean = true;
  @Output() searchTerm = new EventEmitter<string>();
  isSignedIn: boolean;

  categories: Category[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    private loginService: LoginService,
    private headerService: HeaderService,
    private searchWordService: SearchWordService,
    private categoryService: CategoryService
  ) {
  }


  ngOnInit() {

    this.loginService.ifUserLoggedIn().then(response => {
      this.isSignedIn = response;
    })

    this.searchForm = this.fb.group({
      term: ["", Validators.required]
    });

    this.fetchCategories();
    this.showSearch();

  }

  showSearch() {
    this.headerService.currentMessage.subscribe(response => {
      this.isSearch = response;
    });
  }
  searchDomain() {
    let term: string = this.searchForm.get("term").value;
    let searchTerm: SearchWord = {
      term: term.toLowerCase()
    }

    let searchTerms: SearchWord[] = []

    console.log("getSearchWordByTerm->", term.toLowerCase());



    console.log("getSearchWordByTerm->", "Set");
    this.searchWordService.setSearchWord(searchTerm).then(() => {
      this.router.navigateByUrl("/search/" + term);
    })


  }


  fetchCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }

  domainLogin() {
    this.loginService.domainLogin();
  }

  logout() {
    this.loginService.logout();
  }

  headerToggle() {
    this.isCollapse = !this.isCollapse;
  }


}
