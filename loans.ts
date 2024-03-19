export enum LoanType {
  PERSONAL = "PERSONAL",
  GUARANTEED = "GUARANTEED",
  CONSIGMENT = "CONSIGMENT"
}

export const loans = [
    {
      type: LoanType.PERSONAL,
      interest_rate: 4,
      
    },
    {
      type: LoanType.GUARANTEED,
      interest_rate: 3,
    },
    {
      type: LoanType.CONSIGMENT,
      interest_rate: 2,
    }
  ]