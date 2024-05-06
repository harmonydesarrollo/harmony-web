import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  create(@Body() users: UsersDTO) {
    return this.userService.create(users);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updatedUserData: Partial<UsersDTO>) {
    return this.userService.update(id, updatedUserData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
