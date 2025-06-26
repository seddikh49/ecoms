
import jwt from 'jsonwebtoken'

const admin = (req, res) => {
  
    const { email, password } = req.body
    console.log(req.body)
 
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    
        const token = jwt.sign({ email, role: "admin" },
            process.env.JWT_SECRET, { expiresIn: '1h' }
        )
        return res.json({success:true, token: token })
    } else {
        res.status(401).json({success:true,  msg: 'sorry, access denied' });
    }
}

export default admin