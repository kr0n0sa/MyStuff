// რა არის სახელი და რა არის ბრძნება შენით უნდა მიხვდე თუ ძან არ გიჭირს.
// address-book-api რო ბრძნება არ იქნება უნდა გესმოდეს უკვე

//                                                  CREATING A NEW APP

// აპლიკაციის შესაქმნელად, უნდა გამოოიყენო CLI command:

// nest new address-book-api

//

//

// იმისათვის, რომ ამ აპლიკაციას შეეძლოს სხვა
// რაღცეებთან დაკავშირება, main.ts ში უნდა გაუწერო

//   app.enableCors();

//

// ეს უკვე თუ გინდა მიუთითო კონკრეტულად რასთან გინდა დაკავშირდეს
// app.enableCors({
//   origin: [
//     'http://abc.com', // the specific domain you want to allow
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // the HTTP methods you want to allow
// });

//

//

//

//                                                  CREATING NEW MODULES

// self explanatory
// nest generate --help
// nest generate

//

//

// იდეაში მოჟნა module გამოგუეყენებია აქ, მაგრამ
// resource თავის კონტროლერებიანა და ნავაროტებიანა
// ქმნის ახალ module ს. address სახელია პროსტა
// nest g resource address

// ასევე არის საკაიფო პარაეტრები, რომლებიც შეგიძლია
// გაუშვა აკმ ქომანდში. ფოტოების ფორლდერის 1.png

//

//

// ეს ქომანდი შექმნის ახალ module ს და main module ს
// იმპორტებში დაემატება ეს მოდულიც
// nest g module address-book
// NOTE AddressBook და address-book ერთნაირ
// შედეგს გამოიღებს. სახერლი ერთნაირი ექნება.

//

//

//

//

//

//                                                  CREATING NEW CONTROLLERS AND SERVICES

//

// შექმნის ახალი address კონტროლერს. პასუხისმგებელია
// სერვისსა და მომხმარებლს შრის ინფოს მიმოცვლისთვის
// nest g controller Address

// შექმნის ახალ სერვისს. სერვისი არის პასუხისმგებელი
// მომხმარებლის მოთხოვნის შესრულებაზე
// nest g service Address

// resource რო ქენი მაგის გამო ყველაფერი მზა-მზარეული მოგივიდა.
// @controller ი სადაც არის იქ მიდი address.controller.ts ში და
// დაინჯექტებულ service ს ნახავ და ისწავლე მაგის ხელით გაკეთბა.

//

//

//

//

//                                                  CREATING NEW DTOs AND ENTITES

// DTO - Data Transfer Object
// DTO data ს სხვადასხვანაირ ფორმატში წარმოდგენაში გვეხმარება.
// უზრუნველყოფს მის ერთ ფორმატზე დაყვანას მთლიან app ში
// რათა გამარტივდეს მისი maintatnance. ასევე გამოიყენება
// server-client communication ში
// DTO > interface

// dto ში გადადი და სხვადასხვა DTO ს ნახავ

// შემდეგ ის უნდა გაააქტიურო კონტროლერში

// Entity კიდე data მოდელებია რომლებიც ურთერთობენ database თან

// entity ში გადადი და ნახავ მაგათაც

//

//

//                                                  HOT MODULE REPLACEMENT

// ეს არის dev tool რომლის დახმარებითაც შეიძლება
// მოდულების შეცვლა real time

// dev ზე გაშვების შემდეგ, სერვერი აკვირდება ცვლილებებს
// რიმელბიც შეიძ₾ება მოახდინო შუა run ის პროცესში.
// ეს ცვლილებები ინახება, როცა prod ზე გაუშვებ სერვერს.
// სერვერი ამ დროს რესტარტდება.

// დიდი აპლიკაციების დროს dev ზე გაშვება არ არის სასურველი,
// cuz დრო მიაქ. უკეთსია HMR გამოიყენო.
// webpack ის დახმარებით შეიძლება ამის გაკეთბა. ის
// გვაძლევს საშუალებას ვცვალოთ მოდულები რესტარტის
// საჭიროების გარეშე. ის ამისთვის webSocket ს იყენებს
// npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
// დალშე GPT ს კითხე რა უნდა ქნა, cli უნდა დააედიტო root ში, ჩაამატო რაღც
// webpack config ფაილები და ასე შემდეგ.

//

//

//

//                                                  POST, CREATE AND DELETE ENDPOINT CREATION

//                                                  ASYNC

// პრაქტიკულად იგივე რაც უბრალოდ async. უბრალოდ არ იცი async წესივრად

//

//

//

//                                                  DATA VALIDATION

// ვირუსები და ყლეობები თუ არ გინდა საჭიროა
// რომ ეგ გამოიყენო. მას აქვს რამოდენიმე კრიტერიუმი
// type and format: მაგ email ან ნომერი
// required fields: აიძულებს რომ აუცილებელი დატა იქნას შეყვანილი, რათა დაზიანებული ინფო არ მოვიდეს
// size and length: სახელად არ გააშვებინო 5000 ხაზიანი კოდი და ასე შემდეგ
// sanitization: ამოიღე სავარაუდოდ საშიში ნიშნები ან სკრიპტები მოწოდებული ინფოდან
// input data satisfies business rules: business logic check ები გააკეთე, რომ დარწმუნდე
// შეესაბამება თ არა ეს ინფო შენს აპლიკაციას.

// pipe validator

// აღიწერება @injectable ით და შემომავალ მოთხოვნასა და route handlerს
// ს შორის ჯდება. validation, transformation და sanitization ს აკეთებს
// ValidationPipe არის ჩაშენებული, ისევე როგორც ბევრი სხვა Pipe.
// aaa 2

//

// class validatior
// აქვს ბევრნაირი დეკორატორები
// @IsString, @IsNumber, @IsEmail, @IsNotEmpty, etc

// მათი გამოყენების მაგალითი
// import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
//
// class UserDto {
//   @IsString()
//   @IsNotEmpty()
//   name: string;

//   @IsEmail()
//   email: string;

//   @IsInt()
//   userId: number;

//   @Length(2, 20)
//   username: string;

//   @IsIn(['admin', 'user'])
//   role: string;
//   @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
//     message: 'Password must be at least 8 characters long and include' +
//     ' at least one uppercase letter, one lowercase letter, and one number.'
//   })
//   password: string;

// custom error message ბიც მოსულა
//   @IsInt({ message: 'User ID must be an integer.' })
//   userId: number;
// }
//
// auto validation:
// DTO ებში წერი დეკორატორებს, რომლებითაც ახდენ ვალიდაციას და
// შემდეგ უკვე ValidationPipe ს იყენებ, რომ ეს წესები ავტომატურად შესრულდეს
// address-id-parm.dto.ts, addressdto.dto.ts, addresscontroler ში ნახე ეს ყველაფერი

// შეიძლება გვინდოდეს, რომ გავაკეთოთ whitelist. ეს იწყება main.ts იდან, სადაც
// validationPipe ის property ებში ის true მივუთითე. ამის შემდეგ ყველაფერი უნდა აღწერო
// დეკორატორებით DTO ში, თორემ blacklist ად ჩათვლის და გააქრობს
// ასევე, disableErrorMessage, რომელიც მალავს ერორებს.

//                                                  CUSTOM PIPE

// pipes folder შია სხვადასხვა pipe ები და ეგაა.

//                                                  EXCEPTION FILTER

// nestjs ს ბებვრი ჩაშენებული რაღაც აქვს ერორებთნ საბრძლველად
// მაგ HtppException. თუ კონკრეტული error handler არ იმუშავებს,
// ამუშავდება გლობალური error handler ი.~

// ასე იწერება catch.
// exception == exception
// ArgumentsHost == request, response და სხვა დეტალები, რომლებიც
// ამ პრობლემის მოგცარებაში დაგვეხმარებიან
// catch(exception: T, host: ArgumentsHost): any;

// catchers ებში ნახე პირველი http და allcatcher.

// ფილტრებს აქვთ სხვადასხვა scope ები

// method-scoped --- ეხება კონკრეტულ მეთდებს კონტროლერში

// controller scoped --- კონტროლერში და მის ყველა მეთოდს ეხება

// global scoped --- ყველა კონტროლერს ეხება მთლიან აპპში

// method scoped:
// id არის route parameter, @Get კიდევ მას აკავშირებს getById სთან
// @Get(':id')
// კონკრეტულად ამ მეთოდზე აამუშავე ეს ფილტრიო ეუბნება
// @UseFilters(HttpExceptionFilter)
//         "ამოიღე id URL იდან, გადააქციე რიცხვად და ამ მეთდის id ს მიანიჭე ეს მნიშვნელობა"
// getById(@Param('id', ParseIntPipe) id: number) {}

// controller scoped:
// @UseFilters(HttpExceptionFilter)
// @Controller('address')
// export class AddressController {}

// global scoped:
// mmain.ts
// async function bootstrap() {
//   ...
//   app.useGlobalFilters(new HttpExceptionFilter());
//   ...
// }

//                                                  CUSTOM EXCEPTIONS

// self explanatory. dupeexception.handler.ts მაგალითისტვის

//                                                  DEFAULT AND CUSTOM LOGGERS

// ანუ ჩაწერა და არა შესვლა. არის მათი ცალკე კალსი.
// ასე უნდა მაგის შემოტანა:
// import { Logger } from '@nestjs/common';

// private logger = new Logger('AddressController');

// აქვს სხვადახვა დონეები:
// verbose: The verbose level is the most detailed log level,
// suitable for very fine-grained information.

// debug: The debug level is for detailed debugging information.

// log: The log level is used for standard informational messages.

// warn: The warn level is used for warning messages,
// indicating unexpected situations.

// error: The error level is specifically for logging
// error messages and stack traces.

// ასე შეგიძ₾ია მიუთითო რომელი ტიპის log ები ამოაგდოს
// main.ts
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     logger: ['error', 'warn', 'debug', 'log', 'verbose'],
//   });
//   ...
// }

//

//

//

//
//                                                  IMPLEMENTING A LOGGER

// middleware logger ებიც არის, რომელების ამარტივებენ loggingს

//we must call the next() middleware function to
// pass control to the next middleware in the stack after
// the current middleware completes the execution.

// nest ში გვაქვს NestMiddleware ინტერფეისი, რომლითაც
// custom middleware შეგიძ₾ია ააწყო
// skeleton for a custom middleware:
// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//   constructor() { }
//      use არის იმისთვის, რომ authentication logic გამოიყენებოდეს
//   async use(req: Request, res: Response, next: NextFunction) {
//     // Implement authentication logic
//          ნექსთ იცი რაც არის
//     next();
//   }
// }

// pipe ს ჰგავს, მაგრამ მათი გამოყენების მომენტები და ფუნქიები
// ერტთმანეთისგან გამოირჩევა

// pipe გამოიყენება სანამ route handler ამდე მივა მოთხოვნა'
// middleware კიდევ მანამდეც და response ის დროსაც

// middleware არის boarder interceptor ი request ებისთვის
// აპლიკაციის დონეზე. pipe ები კიდევ ინფოს ამუშავებენ
// route handler ებისთვის.

// mid ს აქვს წვდომე request და response ობიექტებთან და
// logging, authentication და ასე შემდეგ შეუძლია
// ხოლო pipe ებს კიდევ ან კონკრეტული property ებთან
// ან მითითებული ობიექტებთან წვდომა აქვთ
// რითაც ისინი დატა transformation და validation შეუძლია

// ასევე middleware ის შექმნა ფუნქციებითაც შეიძლება.
// უკეთესია მარტივი middleware ისთვის, კლასები რთილებზე მიდიდს უკეთ.

// import { Request, Response, NextFunction } from 'express';

// export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
//   // Implement authentication logic
//   next();
// };

// middleware ფუნქციური რომ გახადო, ის უნდა ფდაფიქსირდეს სადმე
// ეს ხდება ან root ში ან კიდევ feature ში. ჩვენ გვინდა, რომ ის გავხადოთ
// ყველგან ხელმისაწვდომი, ასე რომ აქ ვუშვებთ.
// // app.module.ts
// export class AppModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }

// თუ გინდა რომ მხოლოდ address ზე ამუშაო:
//  .forRoutes({path: 'address', method: RequestMethod.POST})

//

//
//                                                  ORM

// object-relational mapping. relational DB ებთან სამუშაოდაა
// ობიექტებისა და კლასების გამოყენებით. SQL ის კოდის წერის
// მაგივრად გამოიყენება.

// ობიექტი უკავშირდება DB ს სპეციალური დეკორატორების დახმარებით.
// გვაქვს რაიმე entity, მაგ user, რომელსაც აქვს თავისი property ები
// ჩვენ ამ property ებს ვუკავშირებთ DB ს. შეიძ₾ება დამატებით
// მიუთითო რაღცეები, მაგალითად table name და როგორი ურთიერთობები
// აქვს ამ DB ს დანარჩენებთან.
// ORM შექმნის შესაბამის SQL query ს

// @OneToMany, @ManyToOne და @ManyToMany არიან დეკორატორები,
// რომლებითაც აღწერ DB ში მოცემული წევრის/collum ის
// ურთიერთობას დანარჩენებთან

// user ის contact და user ში ჩავწერეთ 2 აღწერა. პირველი
// არის contact, მეორე user. ერთს აქვს OTM, მეორეს MTO
// ურთიერთბა გაწერილი ერთმანეთთან.
// User ს აქვს contacts property, Contact ს აქვს user property.

// ანალოგიურად User და Role საც. პროსტა დააკომენტარე
// @OneToMany და მოხსენი კომენტარი @ManyToMany ს

// Repository ადგილია, სადამ მიდის Entity, ის არის პასუხისმგებელი
// DB სთან ურთერთბაზე და Entity ების უკან დაბრუნებაზე.
// შეიძ₾ება გქონდეს UserRepository თავისი მეთდებით და DB თი
// ეს კეთდება სიმარტივისთვის

// შექმენი და ჩსვი repository სხვადსხვა კლასებისთვის
// და მასში ჩასვი ყველა ურთიერთობის საშუალება, რომელიც
// მოცემულ თემას ეხება

// Entity ები TypeORM ში დააფიქსირე

// @InjectRepository გამოიყენე სერვისებში მათ ჩასასმელად
//                                                  SET UP TYPEORM

//npm install typeorm @nestjs/typeorm mysql

//                                                  CREATE OPTION

// An entity represents a database table and its data.
// address/entity/address.entity.ts ში არის ამის კოდი

// არსებობ ორი ხერხი რომ ენტიტიებზე იმოქმედო
// repository და EntityManager. პირველი უფრო განზოგადებულია
// და მართავს ერტ კონკრეტულ entity ს, მეორე უფრო fine grained
// და მართავს ბევრ entity ს ერთდროუალდ

// აქ მხოლოდ repository ს ვისწავლით

// address.service შკ გიწერია ბოლოში კომენტარად კოდი
// ეს არის create ის შემოტანის კოდი
//                                                  DB FIRST

// ჯერ ქმნი სქემას თუ DB არ არსებობს
// ანუ ქმნი table ებს, ქმნი ურთიერთობებს და ასე შემდეგ
// როცა DB შექმნილია, შემდეგ დაიწყებ Entity ების შექმნას.
// ამის შემდეგ, ყველა ცვლილება რომელიც მოხდება DB ში
// აისახება კოდზე

// უფრო მარტივია, მაგრამ რადგან თვისით აგენერირებს კოდს,
// იზღუდება ძლიან. + შეიძ₾ება კოდი დარეგენერირდეს და გააქროს ყველა
// ის ცვლილება, რომელბიც შეტანილი გქონდა.

// თუ უკვე არსებობ DB, უფრო მარტივია, რომ პირდაპირ ის
// გამოიყენო, რადგან code first გაწელავს საქმეს

//                                                  CODE FIRST

// აქ უკვე ჯერ entity ებს ქმნი და მერე DB ს.

// უფრო მარტივად იწერება ვალიდაციის კოდი და მიგრაციების
// დახმარებით version control მარტივდება

// თუ პრიორიტეტი კონტროლის ქონა ან version control
// არის, მაშინ ეს აჯობებს.

// აქ code first ს ვსწავლობთ

// env.dev_ში
// SYNCHRONIZE = true
// ეს ჩაწერე. კოდს გადახედავს და გაშვებისას შეასაბამის
// ცვლილებეს შეიტანს DB ში, მაგ დაამატებს Collumn ს
// თუ ის აღწერილი გვაქვს, მაგრამ არ არსებობს table ში.
// თუ რამე არის DB ში და ის აღწერილი არ გვაქვს,
// სავარაუდოდ წაიშლება და დაიკარგება ინფო

// address entity შექმენი(უკვე გაქვს)

//

//                                                  OTO AND OTM AND MTM

// OTO
// user.entity და address.entity ში არის მოცემული onetone
// -საინტერესო მომენტი აქვს ერთი. @JoinColumn ეუბნება
// ts ს, რომ user ს ჰქონდეს კავშირი ანუ მას "დაემატოს"
// address ის მითითებული column.
// eager რო არის, მაგის დახმარებით მოჟნა ასოცირებული
// entity ების ავტომატურად ჩატვირთვა. ყველგან გამოყენება
// რეკომენდირებული არ არის, რადგან დრო და ენერგია მიაქ.
// თან შეიძლება ყოველთვის არ გვჭირდებოდეს გაერთიანებულად.

// @OneToOne გასაგებია რასაც შვება

// OTM

// cascade ის დახმარებით როცა ერთგან განაახლებ რაიმე
// collumn ს ან წევრს, მეორეგან შესაბამისიც განახლდება
//

// MTM

// user.service და Role.Entity ს იყენებს ეს.
// სინტაქსს შენითც ნახავ და გამოიკვლევ.

// Bi vs Uni directional relations
// Bi --- ორივე მხრიდან არიან დაკავშირებული table ები
// uni -- გასაგებია
// user და role ის შემთხვევაში აქ რომ გვაქვს გაკეთებული, Bi არის.
// ანუ წინ და უკან შეიძლება ამათ შორის მოძრაობა

// ასე დაიწერებდოდა uni
// user.entity.ts
// @Entity()
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   ...
//   // Unidirectional relationship: User to Roles
//   @ManyToOne(() => Role)
//   @JoinColumn()
//   role: RoleEntity;
// }

// // role.entity.ts
// @Entity()
// export class RoleEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;
// }

//                                                  MIGRATION

// ახალი entity = ახალი რაღაც DB ში. ანალოგიურად
// ცვლილებებზეც და წაშლაზეც. კოდს რო განაახლებ
// განახლდება DB ც. იქმნება მიგრაციის ფაილი რომელიც
// შეგიძლია მოსდო ს

// TypeORM ის მიგრაცია არ აკეთბს წაშლასა და აღდგენას.
// make a backup bitch
// მიგრაციის დროს .env.dev ში SYNCHRONIZE = false უნდა გაწერო
// და ეს კიდე

// // typeorm.ts
// TypeOrmModule.forRoot(
// {
//   ...
//   synchronize: `${process.env.SYNCHRONIZE}` === 'true',
//   // we set it to false in the .env.dev file
// }

// დალშე TypeORM უნდა დააკონფიგურირო მიგრაციისთის

// // typeorm.ts'
//// dotenvConfig function loads environment variables from a
//// specific .env file based on the NODE_ENV environment variable.
//// The dotenvConfig function is an alias of dotenv.config()
//// and comes from the dotenv library.
// dotenvConfig({ path: `.env.${process.env.NODE_ENV}` });

//// The config object contains the basic TypeORM configuration,
//// including database connection details and the autoLoadEntities
//// and synchronize settings. The values are retrieved from
//// the environment variables.
// const config = {
//   type: 'mysql',
//   ... // database connection details
//   autoLoadEntities: true,
//   synchronize: `${process.env.SYNCHRONIZE}` === 'true',
//   // we set it to false in the .env.dev file
// };

// const { autoLoadEntities, synchronize, ...otherOrmConfigs } = config;

//// These lines define the configuration overrides. The otherConfigs object
//// is created by omitting autoLoadEntities and synchronize from the original config.
//// This is done to create a modified configuration for migrations, excluding the
//// autoLoadEntities and synchronize settings that are not required for running migrations.
//  const migrationConfig = {
//   ...otherOrmConfigs,
//   migrations: [],
//   entities: [AddressEntity, UserEntity, ContactEntity, RoleEntity, StateEntity]
// };

//// This exports two items.

//// The default export registers the config object as a configuration
//// provider using NestJS’s registerAs function.

//// The connectionSource is a DataSource instance initialized with the
//// modified migrationConfig. It is exported to be used by TypeORM CLI for migrations.
// export default registerAs('OrmConfig', () => config);
// export const connectionSource = new DataSource(migrationConfig as DataSourceOptions);
// // app.module.ts

////  The ConfigModule.forRoot function is used to load the OrmConfig configuration provider,
////  which refers to the exported config object from typeorm.ts.
// @Module({
//   imports: [
//     ...
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [OrmConfig],
//       envFilePath: `.env.${process.env.NODE_ENV}`,
//     }),

//// The TypeOrmModule.forRootAsync configuration method is used to configure
//// TypeORM asynchronously, injecting ConfigService to retrieve OrmConfig.
//// This ensures that the TypeORM configuration aligns with the
//// environment-specific settings.
//     TypeOrmModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) =>
//         configService.get('OrmConfig'),
//     }),
//     ...
//   ],
//   ...
// })

// CLI ს გამოყენება სიმარტივისთვის:
// NOTE: მიგრაციაზე ჩალიჩისას ვერ გააფუჭებ ორიგინალურ DB ს. არ დაასეივო თუ არ ხარ დარწმუნებული
//// package.json

//// This script command utilizes ts-node to execute the TypeORM CLI directly.
// "typeorm": "ts-node ./node_modules/typeorm/cli",

//// It uses the custom command defined in line 2 (npm run typeorm) and specifies
//// the migration:run command to execute migrations. The -d flag points to the file
//// (./src/typeorm.ts) containing the TypeORM configuration.
// "typeorm:run-migration": "NODE_ENV=dev npm run typeorm migration:run --
//         -d ./src/typeorm.ts",

//// This command uses the custom command (npm run typeorm) and specifies
//// migration:generate to generate a new migration file.
// "typeorm:generate-migration": "NODE_ENV=dev npm run typeorm --
//         -d src/typeorm.ts migration:generate src/migrations/$npm_config_name",

//// This command uses the custom command (npm run typeorm) and specifies
////  migration:revert to revert the last executed migration.
// "typeorm:revert-migration": "NODE_ENV=dev npm run typeorm --
//         -d ./src/typeorm.ts migration:revert"

// პირცელად რო გაუშვებ მიგრაციას, მისი შესაბამისი Table გაჩნდება DB ში

//                                                  SERIALISATION

// data object ების გარდაქმნა net ში გადაგზავნად ფორმატში
// მოკლედ, დებილივით ყველაფრიანა არ უნდა ატარო JSON ი,
// პაროლი და ზედმეტი რაც არის უნდა მოაცილო

// ამისთვის კარგი რაღაცაა ClassSerializerInterceptor
// რომელიც მუშაობს როგორც middleware. არ არის დეკორატორი,
// მაგრამ გამოიყენება @UseInterceptors() ს თნ რათა ის
// კონტროლერებს და route ებს მოედოს. ასევე ის შეიძ₾ება მთელს აპპს მოედოს
// ის არის დამოკიდებული class-transformer package ზე.
// user.controller ში უნდა ჩასვა ჯერ

// ასე შეიძლება მთლიან აპპზე გააქტიურება
// // main.ts
// async function bootstrap() {
//     ...
//   app.useGlobalInterceptors(new ClassSerializerInterceptor(
//     app.get(Reflector))
//   );
//   ...
// }
//
// უნდა დაამატო exclude დეკორატორი პაროლს user.entity.ts ში
// სერიალიზაციის დროს პაროლი არ შევა გაგზავნად ინფოში
// შეგიძ₾ია მას გადასცე { toPlainOnly: true } რომ მხოლოდ
// user ებთან გაიგზავნოს პაროლი
// იმისათვის რომ სერიალიზაციამ იმუშავოს, საჭიროა
// რომ მან დააბრუნოს კლასის instance და არა პროსტა ობიექტი
// user.controller ში არის @Get
// მაგის ბოლოში არის ...ოპერატორი, რომელიც აუცილებელია.
// მის გარეშე არ ხდება სერიალიზაცია და მაინც პაროლიანს აბრუნებს

// შეგიძლია ეს ქნა, რომ დაარეგულირო სერიალიზაციის მუშაობა.
// ეს, მაგალითდ, გააქრობს ყველაფერს, რაზეც @Expose არ არის მითითებული
// @SerializeOptions({
//   strategy: 'excludeAll'
// })
//
//

//                                                  GROUP BASED SERIALIZATION

// კლასში ჯგუფდებიან property ები. შეგიძ₾ია სახელებიც დაარქვა
// ჯგუფებს

// npm install class-transformer class-validator

// class-transformer ში @Expose და @Exclude და ეგეთი
// რაღაცეებია,
// class-validator ში კიდევ გადასამოწმებელი ფუნქციები,
// მაგალითად @IsEmail და ასე შემდეგ.

// role.constant.ts ში არის აღწერილი ობიექტი
// ეს ობიექტი შემოგვაქვს სადაც გვინდა, მაგ user.entity.ts ში
// და expose დეკორატორით ვსაძლევთ მათ წვდიმას მითითებულ property
// ებზე. ანუ ადმინს პაროლთან წვდომა, მკითხველს კიდევ მხოლოდ სახელთან

// შემდეგ, გადავდივართ კონტროლერში და @SerializeOption ს
// ვიყენებთ role-specific endpoint ებისთვის.
// ეს endpoint ები უნდა იყვნენ authorized, რასაც მერე გავივლით
//

//                                                  CACHING USING INTERCEPTORS

// just like chache in phone.

// interceptor ები სხვადასხვა scope ებით
// შეგიძ₾ია გაუშვა, მაგალითები:
// ~// main.ts
// // apply MyInterceptor at global level
// app.useGlobalInterceptors(new MyInterceptor());

// // state.controller.ts
// // apply MyInterceptor at controller level
// @Controller('state')
// @UseInterceptors(MyInterceptor)
// export class StateController {}

// // state.controller.ts
// // apply MyInterceptor at method level
// @Get()
// @UseInterceptors(MyInterceptor)
// getAllStates(){}
//

// მთლად ნუ გადაიჯვამ interceptor ებზე თორემ
// რთული გახდება აპლიკაციის maintanance

// არის ბევრნაირი, მაგრამ ვამახვილებთ ყურადღებას
// CacheInterceptor ზე
// ხშირად გამოყენებულ ინფოს ქეშავს.
// რაღც დროის განმავლობაში ინახავს ინფოს

// npm install "@nestjs/cache-manager" "cache-manager"

// module.user.ts ში წერია მოდული.

// არსად არ მაქ ეს ჩაგდებული, მაგრა, ასე ხდება interceptor ის
// დამატება კონტროლერზე:
// @Controller('state')
// @UseInterceptors(CacheInterceptor)
// export class StateController {}

// აქვს რამოდენიმე property:
// ttl გასაგებია არც არის. default = 5წმ
// max მაქსიმუმ რამდენი რაღცის შენახვა შეიძლება. def = 100
// როცა გაიმაქსება, ყველაზე უხმარს ამოაგდებს(დროის მიხედვით)

// ხშირად ცვლადი ინფო არ დაქეშო და sensitive data კიდე.
// დაქეშე სტატიკური ინფო ან კიდევ ისეთი ინფო, რომლის ცვლილებისას
// მცირე delay არ გიჯვამს საქმეში

//                                                  CUSTOM INTERCEPTORS

// შესაქმნელად საჭიროა NestInterceptor ის ინტერფეისის გამოყენება.
// ამის შესაქმნელად უნდა შემოიტანო მეთოდი intercept
// სადაც interceptor logic არის აღწერილი.
// მას აქვს ორი პარამეტრი:
// context --- type არის ExecutionContext. route,request და response
// ობიექტები აქვს შიგნით. მისი გამოყენებით შეგვიძლია მათი შეცვლა(req და res)
// next --- შემდეგ რა ქნას იმას ეუბნება. ასინქრონულია დააბრუნებს observable ს
// that can emit multiple values over time, allowing asynchronous handling of data.

// მაგ:
// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class MyInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
// Access and modify the request and response using the 'context' object.

// extracts the HTTP request object from the context variable. The switchToHttp()
// method, exposed by ExecutionContext, is used to access the HTTP-specific details
// of the current request.
//     const request = context.switchToHttp().getRequest();

//  This line retrieves the HTTP response object from the context.
//     const response = context.switchToHttp().getResponse();

//     // Perform interception logic here.

//     // Call 'next' to pass control to the next step in the processing pipeline.
//     return next.handle();
//   }
// }
//

// შევქმნათ ResponseInterceptor რომელიც იზამს შემდეგს:
// დააბრუნებს response object ს შემდეგნაირად:
// data --- og response data from the route handler
// status --- HTTP status code of response
// success --- true or false.
// error --- null if successfull. error if error
//
// camel case ად გადააქციე მოწოდებული property ები

// export class ResponseInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

//// The next object represents the next step in the request processing pipeline
//     return next.handle().pipe(

//       map((res: unknown) => {
//// This line retrieves the HTTP response object from the context.
//         const resObj = context.switchToHttp().getResponse();

//// These lines will check if both the request object and its body property
//// exists before proceeding to modify the response. Then, it formats and
//// returns a standard response object that contains properties,
//// including data, status, success, and error.
//         if (reqObj && reqObj.body) {
//           return {
//             data: res,
//             status: resObj.statusCode,
//             success: true,
//             error: null
//           }
//         }}
//     ));

//     // If request or its body is not present, proceed without modification
//     return next.handle();
//   }
// }
// დალშე უკვე camel case
// @Injectable()
// export class ResponseInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     const reqObj = context.switchToHttp().getRequest();
//     reqObj.body = convertCamel(reqObj.body);
//     ...
//   }

//
//                                                  AUTHENTICATION AND AUTHORIZATION

// Authernticaton = login, a gatekeeper
// Authorizaton = what can i do after loggin in, a keymaster.

// RBAC - Role Based ACcess
// აღწერ როლს, აძლევ მას უფლებებს, ანიჭებ მას მომხმარებელს
// და წყვეტ შეხების უფლებებს არასათანადო ინფოსთან

// Token Based Authentication --- სერვერი ქმნის
// ტოკენს, რომელიც ატარებს ინფოს მომხმარებლის
// უფლებების შესახებ. შემდეგ, როცა აგზავნი HTTP
// მოთხოვნას, იგზავნება ასევე ტოკენიც, რომლითაც
// დასტურდება შენი უფლებები. 3.png ვიზუალისთვის
// პლიუსი ისაა, რომ ინფოს შენახვა არ გიწევს ვის რისი
// უფლება აქვს. თუ აქვს ტოკენი, შესაბამისი უფლებაც აქვს
//
// Multiple Factor Authentication არის და კიდევ
// Certificate-Based Authentication. მეორე enterptise
// ებში გამოიყენება სერვერებს შორის კავშირის გასაბმელად

// ბევრნაირად შეგიძლია ჩააშენო აუთენტიფიკაცია.
// მაგ ბიბლიოთეკა "passport", რომლის დახმარებითაც
// შეგიძლია აუთენტიფიკაციის საშუალებების გაწერა, მათ
// შორის JWT, რომელიც წარმოადგენს კომპაქტურ,
// self-contained დატა სტრუქტურას რომელსაც უსაფრთხოდ
// გადააქვს ინფომომხმარებლებს შორის JSON ით.

// დებილივით DB ში არ ჩაწერო პაროლი. გამოიყენე Hashing.
// ის გადააქცევს პაროლს Fixed-length სტრინგად, რომლის
// დაბრუნებაც პრაქტიკულად შეუძლებელია

// გამოყენებადი აუთნტიფიკაციის საშუალებები NestJS ში:
// passport --- supports local username/password, JWT, OAuth, etc.
// @nestjs/jwt --- JWT ების ხმარებაში დაგეხმარება
// Guards --- შექმნი Guard ს, რომელიც ტოკენების ან სხვა წესების მიხედვით
// არ შეუშვებს ვინმეს სადმე

// crypto: The CryptoJS library provides a wide range of
// cryptographic functionality, including encryption,
// decryption, hashing (for example, SHA-256), and more.
// We can use this module for various
// security-related operations.

// bcrypt: The bcrypt library is often used for
// securely hashing passwords. It’s a popular
// choice for securely storing user
// passwords in databases.

//                                                  SIGN-UP
// auth floder ში არის თითქმის ყველაფერი
// npm install bcrypt
// დაჰეშვა:
// user.service.ts ში
//  import * as bcrypt from 'bcrypt';
//   ...

//   async createUser(user: CreateUsersDto) {
//   ...
// 10 აქ ნიშნავს, რომ 10 ჯერ გაიმეოროს გაჰეშვა, რაც უფრო მეტი,
// მით უფრო რთულია ამის შემობრუნება
//     userEntity.password = await bcrypt.hash(user.password, 10);
//   ...
//   }

//

//                                                  LOGIN ENDPOINT WITH JWT

// JWT ს აქვს header, payload და signature.
// გაშიფრულია Base64 ით დაგამოყოფილები არიან წერტილებით
// Base64 ნიშნავს ორობითის კოდირება ტექსტით. URL-friendly
// მეთოდია, რადგან ის არ შეიცავს პრობლემულ character ებს.
// მაგ:
// ეს email შეიცავს + ს, რაც შეიძლება იყოს არასწორად ინტერპრეტირებული
// მაგრამ Base64 ის დახმარებით, მისი კოდირების შემდეგ, ის გაქრა.

// {
//   "email": "john+doe@example.com",
//   "exp": 1677644570
// }

// // Base64 encode
// ewogICJlbWFpbCI6ICJqb2huK2RvZUBleGFtcGxlLmNvbSIsCiAgImV4cCI6IDE2Nzc2NDQ1NzAKfQ==

// Header
// ეს, ზოგადად, ორი ნაწილისგან შედგება: token type
// და signing algorithm მაგ: HMAC, SHA256, ან RSA
// მაგ:
// {
//   "alg": "HS256",
//   "typ": "JWT"
// }
// Base64 ის შემდეგ ასე გამოიყურება
// ewogICJhbGciOiAiSFMyNTYiLAogICJ0eXAiOiAiSldUIgp9

// Payload
// ბევრი რამ შეიძ₾ება ეწეროს აქ.(aaa/4.png) მაგ:
// {
//   "sub": "1234567890",
//   "name": "John Doe",
//   "iat": 1516239022
// }
// Base64 ის შემდეგ:
// ewogICJzdWIiOiAiMTIzNDU2Nzg5MCIsCiAgIm5hbWUiOiAiSm9obiBEb2UiLAogICJpYXQiOiAxNTE2MjM5MDIyCn0=

// Signature
// for verification of identity and checking the integrity
// of the message. იქმნება კოდირებული payload ითა და
// Header ით და საიდუმლო ან public key თ, რომლის
// ალგორითმიც header შია მითითებული
// მაგ:
// K3JlSUdLaDMyU0lZRjI1NnNwNjhXRFpERUpQUHVRdjlsdFJrMzhHTVh5djhTQ21mVWVoRFRoYVRKcEx4Kzh3TXhhR0xYc0FpZjl4Nk8
// wUllSR2ZMTHhlTXZPZHpYRFdpaTVka1QySVlPaDg2VDBqRmJiRXdUeXhjb3YycDNjTm1HVXBXeUwzWGxGeXVLQUFDK2VZV25pb1V0MF
// JWQ2ZERHh5NGNxbGVPOUZPTmJiTlZuQnBKMWpibDlFTWVwME0zQ2dkbE4yVGZlbVlnT3ZlOFlQejVCaEFHZFJjZjdZS1RJYjFLR2UwV
// HZKSkpzSXVZNlJsd25hS3FKNnBoSW5VWm54V0tnPT0

// npm install jsonwebtoken @nestjs/jwt

// module.auth ში ჩავამატე JWT ნაწილი და მისი ახსნა
// service.auth ში ჩავამატე log in ის მეთოდი
// controller.auth ში ჩავამატე login endpoint ი

//                                                  MANAGING PROGRAM FLOW WITH GUARDS

// Guardის ფუნქციაა შეზღუდოს წვდომა კოდის
// ზოგიერთ ნაწილთან, თუ რაიმე პირობა არ სრულდება
// @Injectible ით აღიწერება და უნდა შეიცავდეს
// CanActivate ინტერფეისს, რომელსაც ერთი მეთოდი აქვს:
// canActivate. მისი დახმარებით Guard იღებს
// გადაწყვეტილებებს, თუ როგორ მოიქცეს კონკრეტულ
// სიტუაციაში, მაგალითად სპეციფიკური user role ის
// მიღების დროს, მისცეს თ არა მას რაიმე პროგრამის
// ნაწილის გამოყენების უფლება
// Guard.auth.ts ში დავამატე ეს ფუნქცია

// Scope
// Global, controller და route scope. ახსნას არ საჭიროებს
// გლობალურად.
// როცა ამას გლობალურად შვები, Guard აღიწერება მოდულების
// გარეთ, რის გამოც dependecncy ებს ვერ აInject ებ,
// ამის მაგივრად უნდა დაარეგისტრირო Guard APP_GUARD provider ის
// დახმარებით. app.module ში იწერება:
// import { APP_GUARD } from '@nestjs/core';

// @Module({
//   providers: [
//     {
//       provide: APP_GUARD,
//       useClass: AuthGuard,
//     },
//   ],
// })
// export class AppModule {}

// შემდეგ კი აქ
//// main.ts
// const app = await NestFactory.create(AppModule);
// app.useGlobalGuards(new AuthGuard());

// controller
// user.controller
// @Controller('user')
// @UseGuards(AuthGuard)
// export class UserController { }

// route level
// @Controller()
// export class UserController {
//   @Get()
//   @UseGuards(AuthGuard)
//   getUsers(): string {
//     // This route will only be accessible if the request is validated by AuthGuard successfully
//     return this.userSerivce.getUsers();
//   }
// }

// შეგიძლია ბევრი guard გაუშვა ერთ კონტროლერზე ან
// route ზე
// ეს ამოწმებს არის თუ არა მომხმარებელი admin.
// @Injectable()
// export class AdminGuard implements CanActivate {
//   canActivate(context: ExecutionContext): boolean {
//     const request = context.switchToHttp().getRequest();
//     return request.headers?.role === 'admin';
//   }
// }
// ასე ხდება რამოდენიმე guard ის დაყენება:
// @Controller('user')
// @UseGuards(AuthGuard, AdminGuard)
// export class UserController { }

//                                                  LOCAL STRATEGY FOR PASSPORT AUTHENTICATION

// with great websites, come great attacks.
// უკეთსი აუთენთიფიკაციის მექანიზმებია საჭირო, მაგ:პასპორტი
// Nest ის Passport ს იყენებ მის გასაკეთებლად, რომელიც
// დოხუია აუთნთიფიკაციის მეთოდებს შეიცას. მაგ:
// local(password and username)
// JWT
// OAuth --- გაძლევს საშუალებას, რომ third-party app ებს,
// მომხმარებლის თანხმობით, რომ გამოიყენონ მათი ინფო
// მათი credential ების გავრცელების გარეშე.
// aaa/5.png

// იწერს package ს
// npm install --save @nestjs/passport passport passport-local
// იწერს dev dependencies
// npm install --save-dev @types/passport-local
// local-strat.auth.ts, localGUard.auth, controller.auth და module.auth ში არის ამის შექმნის კოდი

//

//                                                  PASSPORT AUTHENTICATION WITH JWT
// npm install passport passport-jwt @nestjs/passport @nestjs/jwt
// jwtStrat.auth, module.auth. jwtGuard.auth და address.controller
// ის @controller ის დასაწყისში წერია ამათი კონფიგურაცია

//                                                  ROLE BASED ACCESS CONTROL
// როლი თუ არის ამ როლის მიხედვით აკეთბს access ს
// roleEnum.auth ში ვწერ როლებს. მათი უფლებების სანახავად aaa/6.png
// ქმნი როლის დეკორატორს roleDecor.auth ში
// roleGuard.auth ში წერია guard ის ინფო

//

//???????????????????????????????????????????????????????????????????????????????????????????????????????
//GET ENDPOINT CREATION ყტბ ში ნახე.???????????????????????????????????????

//HOT MODULE REPLACEMENT  ყტბ ში ნახე ???????????????????????????????

// pipes

// exceptions kinda not undersand

// type ORM query builder
