import { ILoan, LoanType } from "./src/types/Loan";

export const loans: ILoan[] = [
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