import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-api-service',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './api-service.component.html',
  styleUrl: './api-service.component.scss',
})
export class ApiServiceComponent implements OnInit {
  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((data) => console.log(data));
  }
}
