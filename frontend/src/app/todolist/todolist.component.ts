import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo = {
    sura: '',
    date: ''
  }

  todos: any;

  constructor(private _data: DataService) { }

  ngOnInit(): void {

    this._data.all().subscribe({
      next: (res)=>{
        this.todos = res;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })


  }



  save(){

    this._data.create( this.todo ).subscribe({
      next: (res)=>{
      
        this.ngOnInit();
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }


  delete(id: any){

    this._data.delete(id).subscribe({
      next: (res)=>{
        this.ngOnInit();
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }


  done(id: any){

    this._data.update(id).subscribe({
      next: (res)=>{
        this.ngOnInit();
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }



}
