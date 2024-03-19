export enum LoanType {
    PERSONAL = "PERSONAL",
    GUARANTEED = "GUARANTEED",
    CONSIGMENT = "CONSIGMENT"
  }
  export interface ILoan {
    type: LoanType,
    interest_rate: number
  }
  