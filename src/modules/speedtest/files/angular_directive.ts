import {Component, View, OnInit} from 'angular2/core';
import {RouteParams, Router, RouterLink} from 'angular2/router';
import {AngularService} from './angular_service';

@Component({ 
  selector: 'angular-grid'
})

@View({ 
	directives: [RouterLink],
	templateUrl: './modules/speedtest/tmpl/angular.html'
})

export class AngularSpeedTest {
    private startInterval: any;
    private columns: Number[];
    private rows: Number[];
    private cell: Number[];
    private rgba1: Number[];
    private rgba2: Number[];
    private rgba3: Number[];
    private version: Number;
    private rndNum: Number;
    private angularService: any;
    private router: any;
    private routeParams: any;
    private isTimerOn: boolean;

    constructor () {
        this.router = Router;
        this.version = 1;
        this.angularService = new AngularService();
        this.rows = this.angularService.populateArray(51);
        this.columns = this.angularService.populateArray(12);
        let cellArray = this.angularService.create2DArray(51);
        this.cell = this.angularService.populateCell(cellArray, 51, 12, 0); 
        let rgbArray = this.angularService.create2DArray(255);
        this.rgba1 = this.angularService.populateCell(rgbArray, 51, 12, 255);  
        this.rgba2 = this.angularService.populateCell(rgbArray, 51, 12, 255);  
        this.rgba3 = this.angularService.populateCell(rgbArray, 51, 12, 255);    
    }

    runInterval () {
        let self = this;
        return setInterval(function() {
            console.log("start timer");
            let rndCols = self.angularService.getRandomNumber(12);
            let rndRows = self.angularService.getRandomNumber(51);
            
            self.cell[rndCols][rndRows] = self.angularService.getRandomNumber(255);
            self.rgba1[rndCols][rndRows] = self.angularService.getRandomNumber(255);
            self.rgba2[rndCols][rndRows] = self.angularService.getRandomNumber(255);
            self.rgba3[rndCols][rndRows] = self.angularService.getRandomNumber(255);
            
            console.log('rndCols: ' + self.cell[rndCols][rndRows]);
            console.log('self.rgba1[rndCols][rndRows]: ' + self.rgba1[rndCols][rndRows]);
            console.log('self.rgba2[rndCols][rndRows]: ' + self.rgba2[rndCols][rndRows]);
            console.log('self.rgba3[rndCols][rndRows]: ' + self.rgba3[rndCols][rndRows]);
            console.log('self.angularService.getRandomNumber(255): ' + self.angularService.getRandomNumber(255));
            console.log('self.angularService.getRandomNumber(255): ' + self.angularService.getRandomNumber(255));
            console.log('self.angularService.getRandomNumber(255): ' + self.angularService.getRandomNumber(255));
        }, 0);   
    }

    startTimer () {
        this.startInterval = this.runInterval();
        this.angularService.setIsTimerOn(true);
        this.isTimerOn = this.angularService.getIsTimerOn();
    }

    stopTimer () {
        clearInterval(this.startInterval);
        console.log("stop timer");
        this.angularService.setIsTimerOn(false);
        this.isTimerOn = this.angularService.getIsTimerOn();
    }

}