import { Component, Input } from "@angular/core";

@Component({
    selector:'teacher',
    templateUrl:'./teacher.component.html'
})
export class TeacherComponent{
    @Input() data: any; // any x
    
}