import { Request, Response } from "express";
import { Customer } from "../types/Customer";
import { loans } from "../../loans";
import { LoanType } from "../types/Loan";

export const loansServices = {
    checkAvailableCustomerLoan: (req: Request, res: Response) => {
        const { age, name, income, location }: Customer = req.body;

        if (income >= 5000) {
            const availableLoans = loans.filter((loan) => loan.type === LoanType.CONSIGMENT);

            res.status(200).json({
                customer: name,
                loans: availableLoans
            })
        }

         else if (income <= 3000) {
            const availableLoans = loans.filter((loan) => loan.type !== LoanType.CONSIGMENT);

            res.status(200).json({
                customer: name,
                loans: availableLoans
            })
        }

        else if (age < 30 && location === "SP" && (income > 3000 && income < 5000)) {
            const availableLoans = loans.filter((loan) => loan.type !== LoanType.CONSIGMENT);

            res.status(200).json({
                customer: name,
                loans: availableLoans
            })
        }    

        else {
            res.status(200).json({
                customer: name,
                loans: []
            });
        }
    }
}