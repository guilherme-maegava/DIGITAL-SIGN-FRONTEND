import { Component, OnInit } from '@angular/core';
import { DigitalSignService } from '../services/digitalsign.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-returned-page',
  templateUrl: './returned-page.component.html',
  styleUrls: ['./returned-page.component.css']
})
export class ReturnedPageComponent implements OnInit {

  event: string;

  constructor(private digitalSignServices: DigitalSignService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
          event = params['event'];
          self.close();
        });
  }

  status(): boolean  {
    if (this.event === 'signing_complete') { return true; }
    return false;
  }

}
