import { rateLimit } from 'express-rate-limit'

const expressRateLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: "You have exceeded your 5 requests per minute limit.",
    headers: true,
});

export  default expressRateLimiter;