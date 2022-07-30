import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

const GET_COUNTRIES = gql`
  query GetCountries {
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
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public countries$: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.countries$ = this.apollo
      .watchQuery({
        query: GET_COUNTRIES,
      })
      .valueChanges.pipe(map((result: any) => result.data?.countries));
  }
}
