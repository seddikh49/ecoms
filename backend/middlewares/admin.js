import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    try {



        const { origin, authorization } = req.headers
        if (!origin) {
            return res.json({ msg: "This origin is not allowed a" })
        }
        console.log(req.headers)
        // console.log(authorization.split(' ')[1])

        if (authorization) {
            
            if (!authorization.split(' ')[1]) {
                return res.json({ msg: "you don't have authorization to access this api" })
            }
            const decoded = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET)
            if (decoded.role !== 'admin') {
                return res.status(403).json({ msg: "Access denied: Admins only" })
            }
            req.user = decoded
            next()
        }

    } catch (error) {
        console.log(error)
    }
}

export default authAdmin