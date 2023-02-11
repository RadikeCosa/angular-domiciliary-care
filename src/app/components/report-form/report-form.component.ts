import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export class ReportFormComponent implements OnInit {
  @Input() patient: any;

  constructor() {}

  ngOnInit(): void {}

  submitData(): void {
    console.log('Submitting data...');
    // Aquí puedes hacer el envío de los datos a la API o almacenarlos en algún lugar
  }
}
