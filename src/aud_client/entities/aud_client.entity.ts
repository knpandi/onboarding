
import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({
    name: 'aud-client'
})

export class AudClient {
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string

    @Column({
        name: 'Client_childMasterId'
    })
    Client_childMasterId: string

    @Column({
        name: 'Client_FirstName'
    })
    Client_FirstName: string

    @Column({
        name: 'Client_LastName'

    })
    Client_LastName: string

    @Column({
        name: 'Client_Email'
    })
    Client_Email: string

    @Column({
        name: 'Client_CompanyName'
    })
    Client_CompanyName: string

    @Column({
        name: 'Client_ClientId'
    })
    Client_ClientId: string

    @Column({
        name: 'Client_PaymentLink'
    })
    Client_PaymentLink: string

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
