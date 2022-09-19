import type { NextApiRequest, NextApiResponse } from 'next'
import { getRepositories } from 'services/getRepositories'
import restricted from '../restricted'

export default async (req: NextApiRequest, res: NextApiResponse<unknown>) => {
	restricted(req, res)
	if (req.method === "GET") {
		const data = await getRepositories()
		return res.json(data)
	}
}