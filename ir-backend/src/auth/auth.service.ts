import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    //const user = this.userService.user({ email: email});
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciais invalidas');
    }
    
    return { access_token: await this.jwtService.signAsync(payload)};
  }
}
