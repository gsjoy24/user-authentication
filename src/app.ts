import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/module/user/user.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', UserRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
  });
});

export default app;
