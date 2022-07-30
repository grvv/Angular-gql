import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { switchMap } from 'rxjs';

const GET_COUNTRY_DETAIL = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      native
      phone
      capital
      currency
      emoji
    }
  }
`;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  public company$: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.company$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.apollo.watchQuery({
            query: GET_COUNTRY_DETAIL,
            variables: {
              code: params.get('id'),
            },
          }).valueChanges
      )
    );
  }
}
