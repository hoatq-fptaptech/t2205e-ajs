import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html"
})
export class HomeComponent{
    city = "Hanoi, Viet nam";
    temp = 27;
    press = 1000;
    humd = 80;

    inputValue = "";

    constructor(private http: HttpClient){ // khởi tạo

    }

    ngOnInit(){ // sau khi dựng UI xong
        this.weather("hanoi");
    }

    weather(city:String){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        this.http.get<any>(url).subscribe(data=>{
            this.city = data.name+" ,"+data.sys.country;
            this.temp = data.main.temp;
            this.humd = data.main.humidity;
            this.press = data.main.pressure;
        })
    }

    findWeather(){
        this.weather(this.inputValue);
    }
}