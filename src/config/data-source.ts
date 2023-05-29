import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeederOptions } from 'typeorm-extension';


ConfigModule.forRoot({});

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions  = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'eduardo100194',
  database: 'dbforpromotional',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '../../migrations/*{.ts,.js}']
};

export const dataSource = new DataSource(dataSourceOptions);

