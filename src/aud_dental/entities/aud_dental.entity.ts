
import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({
    name: 'aud-dental'
})

export class AudDental {
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string

    @Column({
        name:'masterId'
    })
    masterId: string;

    @Column({
        name: 'Denatl_childMasterId'
    })
    Denatl_childMasterId: string

    @Column({
        name: 'Denatl_FirstName'
    })
    Denatl_FirstName: string

    @Column({
        name: 'Denatl_LastName'

    })
    Denatl_LastName: string

    @Column({
        name: 'Denatl_Email'
    })
    Denatl_Email: string

    @Column({
        name: 'Denatl_CompanyName'
    })
    Denatl_CompanyName: string

    @Column({
        name: 'Dental_ClientId'
    })
    Dental_ClientId: string

    @Column({
        name: 'Denatl_PaymentLink'
    })
    Denatl_PaymentLink: string

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
