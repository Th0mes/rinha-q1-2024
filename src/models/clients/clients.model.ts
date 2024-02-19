import { Elysia, t } from 'elysia';

export const transactions = {
	'transactions.body': t.Object({
		valor: t.Numeric(),
		tipo: t.Union([t.TemplateLiteral('d'), t.TemplateLiteral('c')]),
		descricao: t.String(),
	}),
	'transactions.response': t.Object({
		limite: t.Numeric(),
		saldo: t.Numeric(),
	}),
};

export const extracts = t.Object({
	saldo: t.Object({
		total: t.Numeric(),
		data_extrato: t.String(),
		limite: t.Numeric(),
	}),
	ultimas_transacoes: t.Array(
		t.Object({
			valor: t.Numeric(),
			tipo: t.Union([t.TemplateLiteral('d'), t.TemplateLiteral('c')]),
			descricao: t.String(),
			realizada_em: t.String(),
		})
	),
});

export const clients = new Elysia().model({
	...transactions,
	extracts,
});
