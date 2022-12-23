import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DONE, IArchanlo, PLAN, TODO } from '../interfaces/i-archanlo';

@Injectable({
  providedIn: 'root',
})
export class ArchanloService {
  collection: string = 'tasks';
  constructor(private fireStore: AngularFirestore) {}

  init() {
    let payload = {
      title: 'Task 3',
      description: 'description here',
      status: PLAN,
    } as IArchanlo;
    this.fireStore.collection(this.collection).add(payload);
  }
  all(status: string) {
    return this.fireStore
      .collection(this.collection, (reff) => reff.where('status', '==', status))
      .snapshotChanges();
  }
  updatePlan(id: string, task: IArchanlo) {
    return this.fireStore.doc(`${this.collection}/` + id).update(task);
  }
  delete(id: string) {
    return this.fireStore.doc(`${this.collection}/` + id).delete();
  }
  create(task: IArchanlo) {
    return this.fireStore.collection(this.collection).add(task);
  }
}
