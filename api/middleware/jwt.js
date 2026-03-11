export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).send("You are not authenticated");
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).send("Token not valid");
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
    });
}