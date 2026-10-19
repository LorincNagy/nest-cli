import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [];
  }
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: string) {
    console.log(id);
  }
}
