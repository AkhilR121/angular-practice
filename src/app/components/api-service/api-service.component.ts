import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { JsonPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-api-service',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  providers: [UsersService],
  templateUrl: './api-service.component.html',
  styleUrl: './api-service.component.scss',
})
export class ApiServiceComponent implements OnInit {
  public data = [];
  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((data) => (this.data = data as never[]));
  }
}
