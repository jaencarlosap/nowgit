import type { NextApiRequest, NextApiResponse } from 'next'
import { getRepositories } from 'services/getRepositories'
import restricted from '../restricted'

const getRepositoriesApi = async (req: NextApiRequest, res: NextApiResponse) => {
	await restricted(req, res)
	if (req.method === 'GET') {
		const data = await getRepositories()
		return res.json(data)
	}
}

export default getRepositoriesApi