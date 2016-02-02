import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class Factory {
    private articles: any; 
    private url: any;
   
    constructor(private http: Http) {
        this.url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20000101&end_date=20140214&sort=newest&fl=headline%2Clead_paragraph%2Cweb_url%2Cmultimedia%2Cpub_date&page=100&api-key=5445ed010346db7ab31fc33e55049350:8:68807489&q=Tech';
    } 
    
    getArticles() {
        return this.http.get(this.url)
            .map(res => res.json().response.docs);
    }
    
    getStatus() {
        return this.articles.status;
    }
    
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    completed() {
        console.log("Completed... " + this.getArticles());
    }
   
}