import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

const GET_COUNTRIES = gql`
  query GetCountriesAgain {
    countries {
      name
      code
      capital
      emoji
      phone
    }
  }
`;

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  public countryCount$: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.countryCount$ = this.apollo
      .watchQuery({
        query: GET_COUNTRIES,
      })
      .valueChanges.pipe(map((result: any) => result.data?.countries?.length));
  }
}
