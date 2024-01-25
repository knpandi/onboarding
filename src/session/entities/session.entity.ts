
import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";


@Entity({
    name: 'session'
})

export class Session {
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string


    @Column({
        name: 'masterId'
    })
    masterId: number

    @Column({
        name: 'subscription_id'
    })
    subscription_id: string

    @Column({
        name: 'customerId'

    })
    customerId: string

    @Column({
        name: 'url'
    })
    url: string

    @Column({
        name: 'successurl'
    })
    successurl: string

    @Column({
        name: 'cancelurl'
    })
    cancelurl: string

    @Column({
        name: 'status'
    })
    status: string

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
