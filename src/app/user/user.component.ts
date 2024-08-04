import { Component, Input, Output, EventEmitter, input, output, computed } from '@angular/core';
import {type User} from './user.model'
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Input
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath(){
    return './assets/users/'+ this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}


/*input/output signal
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();
  imagePath = computed(()=> './assets/users/'+ this.avatar());
  onSelectUser(){ 
    this.select.emit(this.id);
  }
}*/

/*Deuxième manière avec Signal
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
*/

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
