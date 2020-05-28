import { Component } from '@angular/core';
import { LoadLayouts } from './layout/actions/layout.actions';
import { LayoutState } from './layout/reducers/layout.state';
import { getlayoutStateJS } from './layout/reducers/layout.selector';
import { environment } from './../environments/environment';
import { filter } from 'rxjs/operators';
import { getAuthStatus } from './auth/reducers/selectors';
import { AppState } from './interfaces';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { CheckoutService } from './core/services/checkout.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { AuthActions } from './auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphicar';
}
