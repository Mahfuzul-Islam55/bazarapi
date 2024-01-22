import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserSignInDto {
  @IsNotEmpty({ message: "Email can't be null" })
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;
  @IsNotEmpty({ message: "Password can't be null" })
  @MinLength(6, { message: 'Password should be at least 6 characters' })
  password: string;
}
