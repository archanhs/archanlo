import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentFormComponent } from './components/student/student-form/student-form.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBjPP77PsHRn0GKJ0MiqIEEDSAYHyqMrAw',
  authDomain: 'oncom-berry.firebaseapp.com',
  databaseURL:
    'https://oncom-berry-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'oncom-berry',
  storageBucket: 'oncom-berry.appspot.com',
  messagingSenderId: '291322685143',
  appId: '1:291322685143:web:ad7ce66eadecd7c0fd7292',
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyBjPP77PsHRn0GKJ0MiqIEEDSAYHyqMrAw',
//   authDomain: 'oncom-berry.firebaseapp.com',
//   databaseURL:
//     'https://oncom-berry-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'oncom-berry',
//   storageBucket: 'oncom-berry.appspot.com',
//   messagingSenderId: '291322685143',
//   appId: '1:291322685143:web:ad7ce66eadecd7c0fd7292',
// };

@NgModule({
  declarations: [AppComponent, PageStudentListComponent, StudentFormComponent],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
