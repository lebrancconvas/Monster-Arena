import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
	console.log(`[${req.method}] ${req.url}`);
	next();
});

router.get('/', (req: Request, res: Response) => {
	res.send('Monster Arena Server');
});

export default router;