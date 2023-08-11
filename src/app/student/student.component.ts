import { Component } from "@angular/core";
@Component({
    selector: 'student',
    // template: '<div><h2>Tên sinh viên</h2></div>'
    templateUrl: './student.component.html',
    styleUrls: ["./student.component.css"]
})
export class StudentComponent{
    data = {
        name:"",
        age: "",
        tel:"",
        mark:0
    }
    changeMark(){ // increse mark (0 -> 10)

    }
}