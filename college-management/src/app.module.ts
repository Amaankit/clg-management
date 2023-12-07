import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { BatchModule } from './batch/batch.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { FinanceModule } from './finance/finance.module';
import { CoreModule } from './core/core.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AuthModule,
    BatchModule,
    SubjectModule,
    StudentModule,
    FinanceModule,
    CoreModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
