import {Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myIdea = "";
  ideas: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    console.log(this.db);

    this.ideas = this.db.collection('ideas', ref => ref.orderBy("timestamp", "desc").limit(100)).valueChanges();
  }

  submit() {
    console.log("submitted");

    let now = new Date();
    let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

    this.db.collection('ideas').add({
      timestamp: nowUtc,
      text: this.myIdea,
    }); 
    this.myIdea = "";
  }
}
