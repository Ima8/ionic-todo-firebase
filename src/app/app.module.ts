import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage' ;
import { Dialogs } from '@ionic-native/dialogs' ;

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;

export const config = {
  apiKey: "AIzaSyA4Tdc95UnOAKYggLknvtChX-QM05B4exs",
  authDomain: "todolist-b6fa4.firebaseapp.com",
  databaseURL: "https://todolist-b6fa4.firebaseio.com",
  projectId: "todolist-b6fa4",
  storageBucket: "todolist-b6fa4.appspot.com",
  messagingSenderId: "986767209377"
 };

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

