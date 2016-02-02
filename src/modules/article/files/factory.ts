import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';

export class Factory {
    articles: any; 
    error: any;
    
    constructor(@Inject(Http) http: Http) {
        var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20000101&end_date=20140214&sort=newest&fl=headline%2Clead_paragraph%2Cweb_url%2Cmultimedia%2Cpub_date&page=100&api-key=5445ed010346db7ab31fc33e55049350:8:68807489&q=Tech';
        http.get(url)
            .map(res => res.json())
            .subscribe(
                article => this.articles = article, 
                error => this.error = error,
                () => this.completed()
            );
    } 
    
    getArticles() {
        return this.articles;
    }
    
    getError() {
        return this.error;
    }
    
    completed() {
        console.log("Completed...");
    }
   
}