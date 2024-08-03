import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

let i = 0;
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
/* Premiére magnière d'update le dom 
export class UserComponent {
  selectedUser = DUMMY_USERS[i];

  get imagePath(){
    return './assets/users/'+ this.selectedUser.avatar;
  }

  onSelectUser(){
    if(i<DUMMY_USERS.length)
      i=i+1;
    else
      i=0;
    this.selectedUser = DUMMY_USERS[i];
  }
}*/
//Deuxième manière avec Signal
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[i]);

  imagePath = computed(()=> './assets/users/'+ this.selectedUser().avatar)

  onSelectUser(){
    if(i<DUMMY_USERS.length)
      i=i+1;
    else
      i=0;
    this.selectedUser.set(DUMMY_USERS[i]);
  }
}
