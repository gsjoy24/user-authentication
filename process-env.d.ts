declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_URL: string;
    BCRYPT_SALT_ROUND: number;
  };
}
