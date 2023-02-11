import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  @Input() patient: any;
  report = {
    register: '',
  };

  medicationChart = {
    medication: '',
    dose: null,
    unit: '',
    frequency: null,
    route: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
