import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

import { PrismaService } from '../database/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class UserService {
	constructor(private Prisma: PrismaService) {}

	async createUser(data: UserDTO) {
		const userExist = await this.Prisma.user.findFirst({
			where: {
				CPF: data.CPF
			}
		});

		if(userExist){
			throw new Error('User already exists');
		}

		const newUser = await this.Prisma.user.create({data});

		return newUser;
	}

	async findUserByID(id: UserDTO['id']) {

		const findUser = await this.Prisma.user.findUnique({ where: {id} });

		if(!findUser) throw new BadRequestException('user not foud');

		return findUser;
	}

	async updateUser(id: UserDTO['id'], data: UserDTO){
		const userExist = await this.Prisma.user.findUnique({
			where: {
				id
			}
		});

		if(!userExist) throw new Error('User does not existes!');

		return await this.Prisma.user.update({
			data,
			where: {
				id
			}
		});
	}

	async deleteUser(id: UserDTO['id']){
		const userExist = await this.Prisma.user.findUnique({
			where: {
				id
			}
		});

		if(!userExist) throw new Error('User does not existes!');

		return await this.Prisma.user.delete({
			where:{
				id
			}
		});
	}
}
