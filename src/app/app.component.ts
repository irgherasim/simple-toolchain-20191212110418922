import { Component, OnInit } from '@angular/core';

import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  sockJs: any;
  ngOnInit() {
  this.sockJs = new SockJS('http://ddcf6d23-cf77-405c-a22f-772a66df8e89.cloudapp.net:10063/eb');

  this.sockJs.onopen = function() {
    console.log('open');
    this.sockJs.registerHandler('getStaticData', (err, msg) =>  {
      console.log(msg);
    });
  };

  this.sockJs.onmessage = function(e) {
    console.log('message', e.data);
    this.sock.close();
  };

  this.sockJs.onclose = function() {
    console.log('close');
  };
}
}

