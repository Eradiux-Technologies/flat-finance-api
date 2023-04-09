import { CreateUserRequestDto } from '../dto/request/create-user-request.dto';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { UpdateUserRequestDto } from '../dto/request/update-user-request.dto';
import { User } from '../entities/user.entity';

export const IUsersService = 'IUsersService';
export interface IUsersService {
  create(createProfileDto: CreateUserRequestDto): Promise<User>;

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<User[]>;

  findOne(fields: EntityCondition<User>): Promise<User | undefined>;

  update(id: string, updateProfileDto: UpdateUserRequestDto): Promise<User>;

  softDelete(id: string): Promise<void>;
}
