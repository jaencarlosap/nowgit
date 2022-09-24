import type { NextApiRequest, NextApiResponse } from 'next'
import { getInfoPr } from 'services'
import restricted from '../restricted'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await restricted(req, res)
	const { owner, name } = req.query as { owner: string, name: string }

	if (req.method === "GET" && owner && name) {
		const data = await getInfoPr({ owner, name })
		return res.json(data)
	}

	return res.json({ error: 'without data' })
}