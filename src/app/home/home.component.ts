import { Component, OnInit } from '@angular/core';
// import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goalItem: string = "Item and goles";
  goals = [];

  constructor(private _datas:DataService) { }

  ngOnInit() {
    this._datas.goal.subscribe(str=>this.goals=str);
    this.itemCount = this.goals.length;
    this._datas.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalItem);
    this.goalItem = "";
    this.itemCount = this.goals.length;
    this._datas.changeGoal(this.goals);
  }
  removeItem(index) {
    console.log(index);
    this.goals.splice(index, 1);
    this._datas.changeGoal(this.goals);
  }
}
