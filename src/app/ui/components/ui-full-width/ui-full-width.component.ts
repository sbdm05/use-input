import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-full-width',
  templateUrl: './ui-full-width.component.html',
  styleUrls: ['./ui-full-width.component.scss'],
})
export class UiFullWidthComponent implements OnInit {
  @Input() collection!: any;

  constructor() {}

  ngOnInit(): void {}
}
