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
import { PageArchanloComponent } from './pages/page-archanlo/page-archanlo.component';
import { CardPlanComponent } from './pages/components/card-plan/card-plan.component';
import { CardTodoComponent } from './pages/components/card-todo/card-todo.component';
import { CardDoneComponent } from './pages/components/card-done/card-done.component';
import { ArchanloNavbarComponent } from './pages/components/archanlo-navbar/archanlo-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ToasterComponent } from './components/toaster/toaster.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBQ18VKbfy1gR5HUxkVLKrXpueZKh6F8yE',

  authDomain: 'angular9firestore-73d25.firebaseapp.com',

  projectId: 'angular9firestore-73d25',

  storageBucket: 'angular9firestore-73d25.appspot.com',

  messagingSenderId: '724419528045',

  appId: '1:724419528045:web:1b30ae79a6bde436da4664',

  measurementId: 'G-K68HEH7X05',
};

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent,
    StudentFormComponent,
    PageArchanloComponent,
    CardPlanComponent,
    CardTodoComponent,
    CardDoneComponent,
    ArchanloNavbarComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
