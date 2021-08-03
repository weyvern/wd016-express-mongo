import 'dotenv/config.js';
import express from 'express';
import users from './routes/userRouter.js';

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use('/users', users);

app.listen(port, () => console.log(`Server running on port ${port}`));
