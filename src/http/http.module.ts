import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RegisterAccountController } from './controllers/register-account.controller';
import { AuthenticateWithEmailController } from './controllers/authenticate-with-email.controller';
import { RegisterAccountUseCase } from 'src/use-cases/register-account.use-case';
import { AuthenticateWithEmailUseCase } from 'src/use-cases/authenticate-with-email.use-case';
import { CreateQuestionController } from './controllers/create-question.controller';
import { CreateQuestionUseCase } from 'src/use-cases/create-question.use-case';
import { CreateExamTemplateController } from './controllers/create-exam-template.controller';
import { CreateExamTemplateUseCase } from 'src/use-cases/create-exam-template.use-case';
import { GetExamTemplateDetailsController } from './controllers/get-exam-template-details.controller';
import { GetExamTemplateDetailsUseCase } from 'src/use-cases/get-exam-template-details.use-case';
import { GetCountExamTemplatesByStatusAndAuthorController } from './controllers/get-count-exam-templates-by-status-and-author.controller';
import { GetExamTemplatesCountByStatusAndAuthorUseCase } from 'src/use-cases/get-exam-templates-count-by-status-and-author.use-case';
import { AuthModule } from 'src/security/auth/auth.module';
import { CryptographyModule } from 'src/security/cryptography/cryptography.module';

@Module({
  imports: [DatabaseModule, AuthModule, CryptographyModule],
  controllers: [
    RegisterAccountController,
    AuthenticateWithEmailController,
    CreateQuestionController,
    CreateExamTemplateController,
    GetExamTemplateDetailsController,
    GetCountExamTemplatesByStatusAndAuthorController,
  ],
  providers: [
    RegisterAccountUseCase,
    AuthenticateWithEmailUseCase,
    CreateQuestionUseCase,
    CreateExamTemplateUseCase,
    GetExamTemplateDetailsUseCase,
    GetExamTemplatesCountByStatusAndAuthorUseCase,
  ],
})
export class HttpModule {}
