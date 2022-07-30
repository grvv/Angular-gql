/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountryDetails
// ====================================================

export interface GetCountryDetails_country {
  __typename: "Country";
  name: string;
  native: string;
  phone: string;
  capital: string | null;
  currency: string | null;
  emoji: string;
}

export interface GetCountryDetails {
  country: GetCountryDetails_country | null;
}

export interface GetCountryDetailsVariables {
  code: string;
}
