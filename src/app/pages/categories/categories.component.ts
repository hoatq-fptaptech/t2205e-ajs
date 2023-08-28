import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-categories',
    templateUrl: './categories.component.html',
    styleUrls:['./categories.component.css']
})
export class CategoriesComponent{
    forecast: any = [];
    inputValue = "";

    constructor(private http: HttpClient){ // reflection
    }

    ngOnInit(){
        this.getForecast("miami");

        var x = 100;
        var y = 8;
        var z = x%y==0? x/y:x/y+1; // toán tử 3 ngồi
    }

    getForecast(city:String){
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        this.http.get<any>(url).subscribe(data=>{
            this.forecast = data.list;
        })
    }

    find(){
        this.getForecast(this.inputValue);
    }
}