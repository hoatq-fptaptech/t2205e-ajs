import { Component } from "@angular/core";

@Component({
    selector: 'classroom',
    templateUrl: './classroom.component.html',
    styleUrls: ["./classroom.component.css"]
})
export class ClassRoomComponent{
    // name = "T2305EAAAAA";
    myclass = {
       name: "T2305E",
       room:"B16",
       sem:"SEM 1" 
    };
    count=0;

    teacher = {
        name : "Trịnh Quang Hoà",
        age : 18
    }

    students= [
        {
            name:"Nguyễn Văn An",
            tel: "09876514",
            classroom:"T2305E",
            address:"8 TOn that thuyet"
        },
        {
            name:"Nguyễn Văn Bình",
            tel: "098765145",
            classroom:"T2304E",
            address:"9 TOn that thuyet"
        }
    ];

    changeCount(){
        this.count++;
    }
}