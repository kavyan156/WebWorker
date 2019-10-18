import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web-worker';

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../../src/app/web-worker/worker.worker.ts', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    }
  }
}
