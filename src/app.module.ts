import { Module } from '@nestjs/common';
import { userController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { PrismaService } from './modules/database/prisma.service';

@Module({
	imports: [],
	controllers: [userController],
	providers: [PrismaService, UserService],
})
export class AppModule {}
