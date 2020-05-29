import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderCartComponent } from './layout/components/header-cart/header-cart.component';
import { HeaderSearchComponent } from './layout/components/header-search/header-search.component';
import { HeaderHelpDropdownComponent } from './layout/components/header-help-dropdown/header-help-dropdown.component';
import { CategoryMobileMenuComponent } from './layout/components/category-mobile-menu/category-mobile-menu.component';
import { CategoriesMenuDropdownComponent } from './layout/components/categories-menu-dropdown/categories-menu-dropdown.component';
import { ProfileDropdownComponent } from './layout/components/profile-dropdown/profile-dropdown.component';
import { BrandMenuDropdownComponent } from './layout/components/brand-menu-dropdown/brand-menu-dropdown.component';
import { FooterSocialLinksComponent } from './layout/footer/components/footer-social-links/footer-social-links.component';
import { FooterContactInfoComponent } from './layout/footer/components/footer-contact-info/footer-contact-info.component';
import { FooterQuickLinksComponent } from './layout/footer/components/footer-quick-links/footer-quick-links.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    FooterComponent,
    HeaderCartComponent,
    HeaderSearchComponent,
    HeaderHelpDropdownComponent,
    CategoryMobileMenuComponent,
    CategoriesMenuDropdownComponent,
    ProfileDropdownComponent,
    BrandMenuDropdownComponent,
    FooterSocialLinksComponent,
    FooterContactInfoComponent,
    FooterQuickLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
