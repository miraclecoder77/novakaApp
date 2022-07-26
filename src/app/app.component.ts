import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'novakaculator';

  constructor (private fb:FormBuilder) {}

  form:FormGroup
  convertRem(e) {
    this.form.patchValue({
      rem: (e.target.value * 1) / 16
    })
  }
  convertPx(e) {
    this.form.patchValue({
      px: (e.target.value * 1) * 16
    })
  }
  // footer date
  today = new Date();
  year = this.today.getFullYear();

  ngOnInit(): void {

    this.form = this.fb.group({
      rem: [""],
      px: [""]
    })
  }
}
