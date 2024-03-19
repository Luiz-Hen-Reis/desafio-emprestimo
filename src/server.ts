import express from 'express';
import { loansServices } from './services/loansServices';

const app = express();
app.use(express.json());

app.post('/customer-loans', loansServices.checkAvailableCustomerLoan);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})