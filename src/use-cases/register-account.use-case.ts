import { Injectable } from '@nestjs/common';
import { Either, left, right } from 'src/core/either';
import { HashGenerator } from 'src/security/cryptography/hash-generator';
import { UsersRepository } from 'src/database/repositories/users.repository';
import { UserStatus, User } from 'src/entities/user.entity';
import { EmailAlreadyRegisteredError } from './errors/email-already-registered.error';

interface RegisterAccountUseCaseRequest {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

type RegisterAccountUseCaseResponse = Either<
  EmailAlreadyRegisteredError,
  {
    readonly user: User;
  }
>;

@Injectable()
export class RegisterAccountUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    email,
    name,
    password,
  }: RegisterAccountUseCaseRequest): Promise<RegisterAccountUseCaseResponse> {
    const userOnDatabase = await this.usersRepository.findByEmail(email);

    if (userOnDatabase) {
      return left(new EmailAlreadyRegisteredError());
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    const user = User.create({
      email,
      name,
      password: hashedPassword,
      status: UserStatus.CREATED,
    });

    await this.usersRepository.create(user);

    return right({
      user,
    });
  }
}
