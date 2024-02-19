import { Elysia } from 'elysia';
import { clientsController } from './controllers/clients';

const app = new Elysia();

app.use(clientsController);

app.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
