import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'novakaculator';
  rem = new FormControl('');
  px = new FormControl('');

  ngOnInit(): void {
    this.rem.valueChanges.subscribe(v => {
      let newPx = parseFloat(v)
      this.px.patchValue(newPx * 16)
    })

    this.px.valueChanges.subscribe(v => {
      let newRem = parseFloat(v)
      this.rem.patchValue(newRem / 16)
    })
  }



}
