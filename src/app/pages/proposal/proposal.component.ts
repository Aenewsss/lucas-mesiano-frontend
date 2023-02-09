import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  constructor() { }

  name: string = '';
  email: string = '';
  phone: string = '';
  description: string = '';
  
  ngOnInit(): void {
  }
  
  sendForm() {
    if(!this.name || !this.email || !this.phone || !this.description) alert("Você precisa preencher todos os campos!") 
    console.log(this.name, this.email, this.phone, this.description)
  }

}
