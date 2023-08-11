import { Component, Input } from "@angular/core";
@Component({
    selector: 'student',
    // template: '<div><h2>Tên sinh viên</h2></div>'
    templateUrl: './student.component.html',
    styleUrls: ["./student.component.css"]
})
export class StudentComponent{
    @Input() studentData:any;
    changeMark(){ // increse mark (0 -> 10)

    }
}