import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Input() label:string;
  @Input() errorMessage: string;

  input : any;

  constructor() { }

  ngOnInit() {
  }

}
