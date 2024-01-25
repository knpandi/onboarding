import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({
    name: 'seo-rankrover'
})

export class SeoRankrover {
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
        name: "brief_description"
    })
    brief_description: string;

    @Column({
        name: 'masterId'
    })
    masterId: string

    @Column({
        name: 'childMasterId'
    })
    childMasterId: string

    @Column({
        name: 'main_services'

    })
    main_services: string

    @Column({
        name: 'operation_market_location'
    })
    operation_market_location: string

    @Column({
        name: 'operation_market_state'
    })
    operation_market_state: string

    @Column({
        name: 'operation_market_city'
    })
    operation_market_city: string

    @Column({
        name: 'operation_market_pincode'
    })
    operation_market_pincode: string

    @Column({
        name: 'seasonal_trends'
    })
    seasonal_trends: string

    @Column({
        name: "ideal_customers"
    })
    ideal_customers: string

    @Column({
        name: 'why_customers_choose'
    })
    why_customers_choose: string;

    @Column({
        name: 'what_makes_you_diff'
    })
    what_makes_you_diff: string

    @Column({
        name: 'main_competitors'
    })
    main_competitors: string[]

    @Column({
        name: 'main_competitors_url'
    })
    main_competitors_url: string[]

    @Column({
        name: 'success_of_your_website'
    })
    success_of_your_website: string

    @Column({
        name: 'does_not_convert'
    })
    does_not_convert: string

    @Column({
        name: "actions_most_imp"
    })
    actions_most_imp: string

    @Column({
        name: 'invested_digitalmarketing_activities'
    })
    invested_digitalmarketing_activities: string;

    @Column({
        name: 'web_optimisedbyseo'
    })
    web_optimisedbyseo: string

    @Column({
        name: 'optimisation_target_keys'
    })
    optimisation_target_keys: string[]

    
    @Column({
        name: 'reporting_keyword_auditinfo'
    })
    reporting_keyword_auditinfo: string

    
    
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
