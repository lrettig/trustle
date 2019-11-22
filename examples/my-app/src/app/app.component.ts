import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  // template: `
  //   <div>
  //     {{ (item | async)?.name }}
  //   </div>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  items: Observable<any[]>;

  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();

    // this.itemDoc = afs.doc<Item>('items/1');
    // this.item = this.itemDoc.valueChanges();
  }
  // update(item: Item) {
  //   this.itemDoc.update(item);
  // }
}
