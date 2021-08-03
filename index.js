import 'dotenv/config.js';
import express from 'express';
import users from './routes/userRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const port = process.env.PORT || 5000;
const app = express();
if (process.env.NODE_ENV !== 'production') {
  const morgan = await import('morgan');
  app.use(morgan.default('dev'));
}
app.use(express.json());
app.use('/users', users);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
