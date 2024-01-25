
import { CreatePpcRankroverDto } from './create-ppc_rankrover.dto';

export class UpdatePpcRankroverDto extends CreatePpcRankroverDto {
    _id: string;  
    updatedBy: string;
    updatedOn: Date;
}
