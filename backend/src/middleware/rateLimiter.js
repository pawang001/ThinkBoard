import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-rate-limit");

        if (!success) {
            res.status(429).json({ message: "Too many requests, please try again later" });
        }
        next()
    } catch (e) {
        console.log("Rate limit error:", e);
        next(e);
    }
}

export default rateLimiter;