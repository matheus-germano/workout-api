import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbHost: string;

  @IsNumber()
  @IsNotEmpty()
  dbPort: number;

  @IsString()
  @IsNotEmpty()
  dbUsername: string;

  @IsString()
  @IsNotEmpty()
  dbPassword: string;

  @IsString()
  @IsNotEmpty()
  dbName: string;
}

export const env: Env = plainToInstance(Env, {
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT),
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
});

const errors = validateSync(env);

if (errors.length > 0) throw new Error(JSON.stringify(errors, null, 2));
