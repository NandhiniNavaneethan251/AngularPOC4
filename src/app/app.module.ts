import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContributorService } from './service/contributors/contributors.service'
import { ContributorsComponent } from './contributors/contributors.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitService } from './service/commits/commits.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { filterContributorsPipe } from './contributors/filter-Contributors.pipe';
import { filterCommitsPipe } from './commits/filter-Commits.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatefilterComponent } from './datefilter/datefilter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent,
    CommitsComponent,
    filterContributorsPipe,
    filterCommitsPipe,
    DatefilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [ContributorService,
  CommitService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
