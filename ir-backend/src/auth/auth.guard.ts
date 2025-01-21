import { CanActivate, ExecutionContext, Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {jwtConstants} from './constants/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject()
  private readonly jwtService: JwtService;

  async canActivate(context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest();
    const authorization = this.extractTokenFromHeader(request);
    if(!authorization) throw new UnauthorizedException('Token is required');
  try {
    const payload = this.jwtService.verify(authorization, {
      secret: jwtConstants.secret,
    });
    request.user = payload;
  } catch (eror) {
    return true;
  }
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }
}
