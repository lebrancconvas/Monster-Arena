import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

const PORT = process.env.PORT || 3302;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] Server is running on port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[ERROR] Server is not running on port ${PORT}`);
	}
});