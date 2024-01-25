
import { CreateRmployeeDto } from './create-rmployee.dto';

export class UpdateRmployeeDto extends CreateRmployeeDto {
    _id: string;  
    updatedBy: string;
    updatedOn: Date;
}
