import { app } from "../src/server";
import { Customer } from "../src/types/Customer"
import supertest from "supertest";
import { ILoan, LoanType } from "../src/types/Loan";

describe('checkAvailableCustomerLoan', () => {
    it('should grant consigment loan if the customer income is equal or above 5000', async () => {

        const customerInfo: Customer = {
            age: 25,
            cpf: "275.484.389-23",
            name: "Vuxaywua Zukiagou",
            income: 5000.00,
            location: "SP"
          }

          const res = await supertest(app).post('/customer-loans').send(customerInfo);

          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveProperty("customer");
          expect(res.body).toHaveProperty("loans");

          const loanTypes = res.body.loans.map((loan: ILoan) => loan.type);
          expect(loanTypes).toContain(LoanType.CONSIGMENT);
    }),

    it('should grant personal and guaranteed loan if the customer income is equal or below 3000', async () => {
        const customerInfo: Customer = {
            age: 25,
            cpf: "275.484.389-23",
            name: "Vuxaywua Zukiagou",
            income: 2500.00,
            location: "MG"
          }

          const res = await supertest(app).post('/customer-loans').send(customerInfo);

          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveProperty("customer");
          expect(res.body).toHaveProperty("loans");

          const loanTypes = res.body.loans.map((loan: ILoan) => loan.type);
          expect(loanTypes).toContain(LoanType.PERSONAL);
          expect(loanTypes).toContain(LoanType.GUARANTEED);
          expect(loanTypes).not.toContain(LoanType.CONSIGMENT);
    })

    it('should grant personal and guaranteed loan if the customer income is between 3000-5000, is below 30 years old and lives in SP', async () => {
        const customerInfo: Customer = {
            age: 26,
            cpf: "275.484.389-23",
            name: "Vuxaywua Zukiagou",
            income: 4500.00,
            location: "SP"
          }

          const res = await supertest(app).post('/customer-loans').send(customerInfo);

          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveProperty("customer");
          expect(res.body).toHaveProperty("loans");

          const loanTypes = res.body.loans.map((loan: ILoan) => loan.type);
          expect(loanTypes).toContain(LoanType.PERSONAL);
          expect(loanTypes).toContain(LoanType.GUARANTEED);
          expect(loanTypes).not.toContain(LoanType.CONSIGMENT);
    })
})