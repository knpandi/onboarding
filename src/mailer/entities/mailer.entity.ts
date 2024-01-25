
import { Entity, Column,ObjectIdColumn } from 'typeorm';

@Entity()
export class Mailer {
  
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string
  
    @Column({
        name: "to"
    })
    to: string;
  
    @Column({
        name: "subject"
    })
    subject: string;

    @Column({
        name:"pdf"
    })
    pdf:string;
}
