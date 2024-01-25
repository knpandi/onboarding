
import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";


@Entity({
    name: 'premiere'
})

export class Premiere {
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
        name: 'businessownername'
    })
    businessownername: string;

    @Column({
        name: 'how_to_pronounce_names'
    })
    how_to_pronounce_names: string;

    @Column({
        name: 'opening_time'
    })
    opening_time: string
    
    @Column({
        name: 'time_zone'
    })
    time_zone: string

    @Column({
        name: 'streetaddress1'
    })
    streetaddress1: string

    
    // @Column({
    //     name: 'streetaddress_location_1'
    // })
    // streetaddress_location_1: string

    
    // @Column({
    //     name: 'streetaddress_location_2'
    // })
    // streetaddress_location_2: string

    
    // @Column({
    //     name: 'streetaddress_location_3'
    // })
    // streetaddress_location_3: string

    @Column({
        name: 'streetaddress2'
    })
    streetaddress2: string

    // @Column({
    //     name: 'streetaddress1_location_1'
    // })
    // streetaddress1_location_1: string

    // @Column({
    //     name: 'streetaddress1_location_2'
    // })
    // streetaddress1_location_2: string

    // @Column({
    //     name: 'streetaddress1_location_3'
    // })
    // streetaddress1_location_3: string

    @Column({
        name: 'city1'
    })
    city1: string

    // @Column({
    //     name: 'City_location_1'
    // })
    // City_location_1: string

    // @Column({
    //     name: 'City_location_2'
    // })
    // City_location_2: string

    // @Column({
    //     name: 'City_location_3'
    // })
    // City_location_3: string

    @Column({
        name: 'state1'
    })
    state1: string

    // @Column({
    //     name: 'State_location_1'
    // })
    // State_location_1: string

    // @Column({
    //     name: 'State_location_2'
    // })
    // State_location_2: string

    // @Column({
    //     name: 'State_location_3'
    // })
    // State_location_3: string

    @Column({
        name: 'pincode1'
    })
    pincode1: string

    // @Column({
    //     name: 'Zip_location_1'
    // })
    // Zip_location_1: string

    // @Column({
    //     name: 'Zip_location_2'
    // })
    // Zip_location_2: string

    // @Column({
    //     name: 'Zip_location_3'
    // })
    // Zip_location_3: string

    // @Column({
    //     name: 'number_location_1'
    // })
    // number_location_1: string
    
    // @Column({
    //     name: 'number_location_2'
    // })
    // number_location_2: string

    // @Column({
    //     name: 'number_location_3'
    // })
    // number_location_3: string

    @Column({
        name: "websitelink"
    })
    websitelink: string

    
    @Column({
        name: "links_for_scheduling"
    })
    links_for_scheduling: string

    @Column({
        name: "cost_of_consultation"
    })
    cost_of_consultation: string

    @Column({
        name: "schedule_existing_clients"
    })
    schedule_existing_clients: string

    @Column({
        name: "attempt_to_transfer"
    })
    attempt_to_transfer: string

    @Column({
        name: "number_of_transfer"
    })
    number_of_transfer: string

    @Column({
        name: "time_of_transfer"
    })
    time_of_transfer: string

    @Column({
        name: "who_should_transfer"
    })
    who_should_transfer: string

    @Column({
        name: "services_available"
    })
    services_available: string

    @Column({
        name: "if_outsideservices_offered"
    })
    if_outsideservices_offered: string

    @Column({
        name: "brief_business_summary"
    })
    brief_business_summary: string
    
    @Column({
        name: "Employee_list"
    })
    Employee_list: string
    

    @Column({
        name: 'patients_find_office'
    })
    patients_find_office: string;

    @Column({
        name: 'seek_integrate_CRM'
    })
    seek_integrate_CRM: string

    @Column({
        name: 'Additional_notes'
    })
    Additional_notes: string

    
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
