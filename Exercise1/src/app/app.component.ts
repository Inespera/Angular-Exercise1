import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: number = 16;
  alignLeft: boolean = false;
  alignRight: boolean = false;
  alignCenter: boolean = false;

  get textAlignment(): string {
    if (this.alignLeft) {
      return 'left';
    } else if (this.alignCenter) {
      return 'center';
    } else if (this.alignRight) {
      return 'right';
    } else {
      return 'left'; // Default to left alignment
    }
  }
  title = 'Exercise1';
}

@NgModule({
  declarations:[],
  imports:[CommonModule, FormsModule],
  bootstrap:[AppComponent],
})
export class AppModule {}