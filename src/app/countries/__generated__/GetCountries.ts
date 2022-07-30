/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountries
// ====================================================

export interface GetCountries_countries {
  __typename: "Country";
  name: string;
  code: string;
  capital: string | null;
  emoji: string;
  phone: string;
}

export interface GetCountries {
  countries: GetCountries_countries[];
}
