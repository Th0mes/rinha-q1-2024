import { Elysia, t } from 'elysia';
import { clients } from '../models/clients/clients.model';

export const clientsController = (app: Elysia) =>
	app.group(
		'/clientes/:id',
		{
			beforeHandle({ set, params: { id } }) {
				// TODO: apply logic to verify if the user exists
				if (id === 1) {
					set.status = 404;
					return { message: 'user not found' };
				}
			},
			params: t.Object({
				id: t.Numeric(),
			}),
		},
		(app) =>
			app
				.use(clients)
				.post(
					'transacoes',
					(res) => ({
						limite: 100000,
						saldo: -9098,
					}),
					{
						body: 'transactions.body',
						response: 'transactions.response',
					}
				)
				.get(
					'extrato',
					(res) => ({
						saldo: {
							total: -9098,
							data_extrato: '2024-01-17T02:34:41.217753Z',
							limite: 100000,
						},
						ultimas_transacoes: [
							{
								valor: 10,
								tipo: 'c',
								descricao: 'descricao',
								realizada_em: '2024-01-17T02:34:38.543030Z',
							},
							{
								valor: 90000,
								tipo: 'd',
								descricao: 'descricao',
								realizada_em: '2024-01-17T02:34:38.543030Z',
							},
						],
					}),
					{
						response: 'extracts',
					}
				)
	);
