import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceOptions } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
