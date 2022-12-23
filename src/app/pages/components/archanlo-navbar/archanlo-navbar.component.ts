import { Component, OnInit } from '@angular/core';
import { ArchanloService } from 'src/app/services/archanlo.service';

@Component({
  selector: 'app-archanlo-navbar',
  templateUrl: './archanlo-navbar.component.html',
  styleUrls: ['./archanlo-navbar.component.css'],
})
export class ArchanloNavbarComponent implements OnInit {
  constructor(public archanloService: ArchanloService) {}
  ngOnInit(): void {}

  createTask(): void {
    this.archanloService.init();
  }
}
