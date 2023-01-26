import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-boxed-layout',
  templateUrl: './ui-boxed-layout.component.html',
  styleUrls: ['./ui-boxed-layout.component.scss'],
})
export class UiBoxedLayoutComponent implements OnInit {
  @Input() collection!: any;

  constructor() {}

  ngOnInit(): void {}
}
