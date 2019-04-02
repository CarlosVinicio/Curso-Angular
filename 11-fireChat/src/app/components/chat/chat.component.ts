import {Component, OnInit} from '@angular/core';
import { ChatService} from "../../services/chat.service";
import { MessageInterface } from "../../interfaces/message-interface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

   public messageText:string;
   chats:MessageInterface[];
   users:any[] = [];
   element:any;
   contact:any = {
     name:'',
     img:'',
     uid:''
   };

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.loadUsers().subscribe()
  }

  sendMessage(){
    if (this.messageText === ''){
      return;
    }

    let message: MessageInterface = {
      name: this._chatService.user.displayName,
      message: this.messageText,
      date: new Date().getTime(),
      uid: this._chatService.user.uid,
      img: this._chatService.user.photoURL,
      contactUid: this.contact.uid
    };
    this._chatService.sendMessage(message)
      .then(()=>{
        this.messageText = '';
        console.log('mensaje enviado correctamente')
      })
      .catch( reason => {
        console.log(reason);
      })
  }

  getContactData(myUid ,contact){
    this.contact = contact;

    this._chatService.loadMessages(myUid, contact.uid).subscribe(messagesData=>{
     this.chats = messagesData;
     this.element = document.getElementById('app-mensajes');
     if(this.element != null){
         this.element.scrollTop = this.element.scrollHeight;
     }
   });
  }
}
