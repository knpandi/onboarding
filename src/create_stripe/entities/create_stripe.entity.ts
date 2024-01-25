
import { Entity, Column,ObjectIdColumn } from 'typeorm';

@Entity({
    name: 'create-stripe'
})

export class CreateStripe {
  
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string
  
    @Column({
        name: 'masterId'
    })
    masterId: string

    @Column({
        name: "name"
    })
    name: string;
  
    @Column({
        name: "email"
    })
    email: string;

    @Column({
        name:"customerId"
    })
    customerId:string;

    @Column({
        name:"object"
    })
    object:string;

    @Column({
        name: 'createdOn',
        default: new Date(Date.now())
    })
    createdOn: Date

    @Column({
        name: 'updatedBy'
    })
    updatedBy: string

    @Column({
        name: 'updatedOn',
        default: new Date(Date.now())
    })
    updatedOn: Date

}
