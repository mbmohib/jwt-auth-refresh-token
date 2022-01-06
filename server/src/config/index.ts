export const appPort = process.env.PORT || 4000;

export const jwtRefreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
export const jwtAccessTokenSecret = process.env.JWT_REFRESH_ACCESS_TOKEN_SECRET;
export const refreshTokenMaxAge = 60 * 60 * 24 * 1000; // 1day
