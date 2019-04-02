import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';


var config = {
  apiKey: "AIzaSyASlGXooAyLdBGvzZjQwareHT7QqrILFuE",
  authDomain: "idea-submitter.firebaseapp.com",
  databaseURL: "https://idea-submitter.firebaseio.com",
  projectId: "idea-submitter",
  storageBucket: "",
  messagingSenderId: "82914807026"
};

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [TimeAgoPipe],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
