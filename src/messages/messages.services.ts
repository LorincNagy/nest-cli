import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private repository: MessagesRepository) {}
  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async create(content: string) {
    return await this.repository.create(content);
  }
}
