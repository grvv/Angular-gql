/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountriesAgain
// ====================================================

export interface GetCountriesAgain_countries {
  __typename: "Country";
  name: string;
  code: string;
  capital: string | null;
  emoji: string;
  phone: string;
}

export interface GetCountriesAgain {
  countries: GetCountriesAgain_countries[];
}
