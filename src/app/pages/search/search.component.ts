import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector:'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent{
    products: any = [];
    total = 0;
    limit = 8;
    page:number=1;
    max_page = 1;
    pages: number[] = [];

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.search(1);
        // this.paginate();
    }

    paginate(){
        let n = (this.total/this.limit).toString();
        this.max_page = this.total%this.limit==0?parseInt(n):parseInt(n)+1;
        this.pages = [];
        for(let i=1;i<=this.max_page;i++){
            this.pages.push(i);
        }
    }

    search(p:number){
        this.page = p;
        const skip = (this.page-1)*this.limit;
        const url = `https://dummyjson.com/products?limit=${this.limit}&skip=${skip}`;
        this.http.get<any>(url).subscribe(data=>{
            this.products = data.products;
            this.total = data.total;
            this.paginate();
        });
    }
    changePage(p:number){
        this.search(p);
    }
}