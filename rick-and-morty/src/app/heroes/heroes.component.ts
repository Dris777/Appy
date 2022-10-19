import { Component, OnInit } from '@angular/core';
import {CharactersService} from "../characters.service";
import {Hero} from "../hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
heroes:any
data:Array<any>=[]
people:Array<any>=[]
alive:string='Alive'
  dead:string='Dead'
  unknown:string="unknown"

  constructor(private service:CharactersService) {

  }

  ngOnInit(): void {

    this.service.getData().subscribe(responce=>{
    this.heroes=responce
      console.log(this.heroes)
      console.log(this.heroes.results)
      this.data=this.heroes.results
      console.log(this.data)
    })
    console.log('')
  }

  showApi(){
    console.log(this.heroes)
  }
}
