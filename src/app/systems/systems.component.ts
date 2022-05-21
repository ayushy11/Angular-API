import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

import { System } from '../system';
// import systemList from '../systemLists';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css'],
})
export class SystemsComponent implements OnInit {
  systems: System[] = [];

  constructor(private systemservice: SystemService) {}

  ngOnInit(): void {
    this.getSystems();
  }

  getSystems(): void {
    this.systemservice
      .getSystems()
      .subscribe((systems) => (this.systems = systems));
  }
}
