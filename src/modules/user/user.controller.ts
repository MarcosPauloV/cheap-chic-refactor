import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class userController {
	constructor(private readonly UserService: UserService) {}

	@Post('new')
	async createUser(@Body() data: UserDTO) {
		return this.UserService.createUser(data);
	}

	@Get(':id')
	async findUserByID(@Param('id') id: UserDTO['id']) {
		return this.UserService.findUserByID(id);
	}

	@Put(':id')
	async editUser(@Param('id') id: string, @Body() data: UserDTO){
		return this.UserService.updateUser(id, data);
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: string){
		return this.UserService.deleteUser(id);
	}

}