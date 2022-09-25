import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'
import { setAccess } from 'services'

const Restricted = async (req: NextApiRequest, res: NextApiResponse<unknown>) => {
	const session = await unstable_getServerSession(req, res, authOptions)

	if (session?.accessToken) {
		//temporal env --- start
		setAccess(session.accessToken as string)
		//temporal env --- end
	}

	if (!session) {
		return res.send({
			error: 'You must be signed in to view the protected content on this page.'
		})
	}
}

export default Restricted