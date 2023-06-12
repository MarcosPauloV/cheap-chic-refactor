import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [],
	controllers: [userController],
	providers: [PrismaService, UserService]
})
export class userModule{}
