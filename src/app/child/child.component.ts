import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../interface';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {

    @Input() brands:Brand[]

    checkboxChange(event):void{
        console.log(event.target.name, event.target.checked)
        console.log('brands', this.brands)
    }

}
