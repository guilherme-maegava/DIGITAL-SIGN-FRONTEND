import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { DigitalSignService } from '../services/digitalsign.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  private digitalSignUrl: string = null;

  constructor(private digitalSignService: DigitalSignService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.digitalSignService
        .getUrl()
        .then(response => {
          this.digitalSignUrl = response.redirectUrl;
          this.digitalSignService.envelopeId = response.envelopeId;
          console.log(this.digitalSignUrl);
        })
        .catch(error => console.log(error));
  }

  get trustUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.digitalSignUrl);
  }
}
