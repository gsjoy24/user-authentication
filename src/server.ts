import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(`The server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
