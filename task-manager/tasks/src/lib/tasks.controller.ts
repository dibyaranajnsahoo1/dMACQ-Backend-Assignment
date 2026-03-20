import { Controller, Get, Post, Body, Param, Delete, Put, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  create(@Body() dto, @Req() req) {
    return this.service.create(dto, req.user.sub);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto, @Req() req) {
    return this.service.update(id, dto, req.user);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req) {
    return this.service.delete(id, req.user);
  }
}