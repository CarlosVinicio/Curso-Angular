import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MessageInterface} from "../interfaces/message-interface";
import { NewUserInterface} from "../interfaces/new-user-interface";
import {map, reduce} from "rxjs/operators";
import {auth} from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  private usersCollecton: AngularFirestoreCollection<any>;
  public user: any;

  constructor( private afs: AngularFirestore, public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe(user=> {

      if ( !user ){
        return
      }
      this.user =  user;
      this.loadUsers().subscribe(usersList=>{
        let index = usersList.map(function (e) {return e.uid}).indexOf(user.uid);
        if (index == -1){
          this.newUserOnline( user ).then(reponse=>{
            console.log('new user online');
          });
        }
      });
    })
  }

  loadUsers() {
    this.usersCollecton = this.afs.collection<any>('users', ref =>
      ref.orderBy('uid','desc')
    );
    return this.usersCollecton.valueChanges()
  }

  loadMessages(myUid, contactUid) {
    this.itemsCollection = this.afs.collection<MessageInterface>('chats', ref =>
      ref.orderBy('date','desc').limit(10)
    );
    return this.itemsCollection.valueChanges()
      .pipe(map(
        data=> {
          let mesages:any[] = [];

            for (let i = 0; i <= data.length-1 ; i++) {
              if ( (data[i].uid == myUid || data[i].uid == contactUid) &&  (data[i].contactUid == myUid || data[i].contactUid == contactUid) ){
                mesages.push(data[i]);
              }
            }
            return mesages.reverse();
        }
      ))
  }

  newUserOnline(user) {
    let localUser:NewUserInterface = {
      name: user.displayName,
      uid: user.uid,
      img: user.photoURL,
      isOnline: true
    };

    let test = this.usersCollecton.get();
    return this.usersCollecton.add(localUser);
  }

  sendMessage(message: MessageInterface) {
    return this.itemsCollection.add(message);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());

  }
  logout() {
    this.afAuth.auth.signOut();

    this.usersCollecton.get().forEach((item) => {
      return item.docs.map(m => {
        return this.afAuth
      });
    });
  }
}
