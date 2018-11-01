import { BoxObject } from './box.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public diamond = [1, 2, 3, 4, 5, 6, 7, 8];
  public arrayObj = [];
  public sample: BoxObject;
  public userScore = 64;
  public diamondCounter = 0;
  public gameOverFlag = false;
  /*
  * function is called on click on the each box
  * the user score is decremented on each click to get score
  * the diamond if present, the diamond flag is turned to true
  */
  onClick(i: number, j: number): void {
    this.userScore--;
    const getItemNumber = (i * 8) + (j + 1);
    this.arrayObj[i][j].clicked = true;
    if (this.diamond.includes(getItemNumber)) {
      this.diamondCounter++;
      this.arrayObj[i][j].diamondFlag = true;
    }
    if (this.diamondCounter === 8) {
      this.gameOverFlag = true;
    }
  }

  /*
  * This method will be called when all the diamonds are found
  */
  gameOver(): void {
    this.diamondCounter = 0;
    this.gameOverFlag = false;
    this.arrayObj = [];
    this.ngOnInit();
  }

  /*
  *The method will be called on init
  */
  public ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      const eachRow = [];
      for (let j = 0; j < 8; j++) {
        eachRow.push(new BoxObject(false, 'NONE', false));
      }
      this.arrayObj.push(eachRow);
    }
  }
}
