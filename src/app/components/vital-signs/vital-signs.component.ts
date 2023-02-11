import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.scss'],
})
export class VitalSignsComponent {
  @Input() patient: any;
  public bloodPressure = {
    systolic: null,
    diastolic: null,
  };
}
