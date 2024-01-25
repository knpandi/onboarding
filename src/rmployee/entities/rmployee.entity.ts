
import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";


@Entity({
    name: 'rmployee'
})

export class Rmployee {
    @ObjectIdColumn({
        name: '_id'
    })
    _id: string

    @Column({
        name: "stageStatus"
    })
    stageStatus: number
    @BeforeInsert()
    beforeInsertStageStatus() {
        this.stageStatus = 0;
    }

    @Column({
        name: "thirdphoneNo"
    })
    thirdphoneNo: string;

    @Column({
        name: 'masterId'
    })
    masterId: string

    @Column({
        name: 'childMasterId'
    })
    childMasterId: string

    @Column({
        name: 'primary_contactname'

    })
    primary_contactname: string

    @Column({
        name: 'primary_useremail'
    })
    primary_useremail: string

    @Column({
        name: 'primary_mobilenumber'
    })
    primary_mobilenumber: string

    @Column({
        name: 'primary_position'
    })
    primary_position: string

    @Column({
        name: 'reportingManagerEmail'
    })
    reportingManagerEmail: string

    @Column({
        name: 'leadname'
    })
    leadname: string

    @Column({
        name: "leadmobilenumber"
    })
    leadmobilenumber: string

    @Column({
        name: 'businessname'
    })
    businessname: string;

    @Column({
        name: 'streetaddress1'
    })
    streetaddress1: string

    
    @Column({
        name: 'streetaddress_location_1'
    })
    streetaddress_location_1: string

    
    @Column({
        name: 'streetaddress_location_2'
    })
    streetaddress_location_2: string

    
    @Column({
        name: 'streetaddress_location_3'
    })
    streetaddress_location_3: string

    @Column({
        name: 'streetaddress2'
    })
    streetaddress2: string

    @Column({
        name: 'streetaddress1_location_1'
    })
    streetaddress1_location_1: string

    @Column({
        name: 'streetaddress1_location_2'
    })
    streetaddress1_location_2: string

    @Column({
        name: 'streetaddress1_location_3'
    })
    streetaddress1_location_3: string

    @Column({
        name: 'city1'
    })
    city1: string

    @Column({
        name: 'City_location_1'
    })
    City_location_1: string

    @Column({
        name: 'City_location_2'
    })
    City_location_2: string

    @Column({
        name: 'City_location_3'
    })
    City_location_3: string

    @Column({
        name: 'state1'
    })
    state1: string

    @Column({
        name: 'State_location_1'
    })
    State_location_1: string

    @Column({
        name: 'State_location_2'
    })
    State_location_2: string

    @Column({
        name: 'State_location_3'
    })
    State_location_3: string

    @Column({
        name: 'pincode1'
    })
    pincode1: string

    @Column({
        name: 'Zip_location_1'
    })
    Zip_location_1: string

    @Column({
        name: 'Zip_location_2'
    })
    Zip_location_2: string

    @Column({
        name: 'Zip_location_3'
    })
    Zip_location_3: string

    @Column({
        name: 'number_location_1'
    })
    number_location_1: string
    
    @Column({
        name: 'number_location_2'
    })
    number_location_2: string

    @Column({
        name: 'number_location_3'
    })
    number_location_3: string

    @Column({
        name: "websitelink"
    })
    websitelink: string

    @Column({
        name: 'domain'
    })
    domain: string;

    @Column({
        name: 'googleaccount'
    })
    googleaccount: string

    @Column({
        name: 'uploadimage'
    })
    uploadimage: string

    
    @Column({
        name: 'leadEmail'
    })
    leadEmail: string

    @Column({
        name:'status'
    })
    status:boolean
    
    @Column({
        name:"pdf"
    })
    pdf:string

    @Column({
        name:"subject"
    })
    subject:string;

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
