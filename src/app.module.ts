import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RmployeeModule } from './rmployee/rmployee.module';
import { AudClientModule } from './aud_client/aud_client.module';
import { AudDentalModule } from './aud_dental/aud_dental.module';
import { MailerModule } from './mailer/mailer.module';
import { PpcRankroverModule } from './ppc_rankrover/ppc_rankrover.module';
import { SeoRankroverModule } from './seo__rankrover/seo__rankrover.module';
import { CreateStripeModule } from './create_stripe/create_stripe.module';
import { PremiereModule } from './premiere/premiere.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ProductsModule } from './products/products.module';
import { PlanModule } from './plan/plan.module';
import { SessionModule } from './session/session.module';
import { SuccessModule } from './success/success.module';
import { CancelModule } from './cancel/cancel.module';
import { PriceModule } from './price/price.module';

// mongodb+srv://LIT-Admin:xeZlZKjwImeW4HaH@onboarding-data.akudtdl.mongodb.net/

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: "mongodb://127.0.0.1:27017",
      // url:"mongodb+srv://LIT-Admin:xeZlZKjwImeW4HaH@onboarding-data.akudtdl.mongodb.net/",
      useNewUrlParser: true,
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      entityPrefix: '',
      synchronize: true,
      logging: true,
    }),
    RmployeeModule,
    AudClientModule,
    AudDentalModule,
    MailerModule,
    PpcRankroverModule,
    SeoRankroverModule,
    CreateStripeModule,
    PremiereModule,
    SubscriptionModule,
    ProductsModule,
    PlanModule,
    SessionModule,
    SuccessModule,
    CancelModule,
    PriceModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
