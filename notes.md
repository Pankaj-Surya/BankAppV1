# ⭐⭐⭐⭐⭐  DATABASE DESIGN ⭐⭐⭐⭐⭐


## 🔴 **Configuration**
1. created project - npm init -y
2. npm i all respective packages (express,body-parser,nodemon)
3. created folder structure and start the server
4. npm i mysql2 sequelize sequelize-cli
5. npx sequelize init ->config,models,migration,seeder auto created
6. setup a config/config.json file => enter password,port and database
7. Go to => cd src => npx sequelize db:create => check show databases
3. create migrations and seeder npx sequelize init
4. Model & Migration creation* >npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum
5. Do Changes in Model & Migration npx sequelize db:migrate
Check the DB -  show tables desc tablename(us)
6. Setup sever and dotenv 
2. Seting up seqelize
     - `npx sequelize init` => Created "config\config.json"
     - Go first inside src becoz we have config,json inside src 
### Command : npx sequelize db:create


## **🟥 DB Design** 
 ---
  
 ### **🔶 BankApp_DB**
  ## Tables : 
     1.Users/Emp
     2.Roles
     3.Customers 
     4.Addresses
     5.Accounts 
     6.Branches
     7.Transactions
     8.Loans
     9.User_Roles => Dervied


1. Auth Service - user , roles, customers,address
2. Branch Service - branch,transaction,loan, account


 
## **1. Users**
| id | name | email | contact | address_id| branch_id | 
| :---- | :----: | ----: | :---- | :----: | ----: |
| 1 | Pankaj | pankaj@gmail.com | 773558555 | 1 | 1 |
| 2 | sam | sam@gmail.com | 2722727272 | 2 | 1 |

## **2. Roles**
| id | name | 
| :---- | :----: | 
|  1 | Manager |
|  2  | Clerk |


## **3. Users_Roles (Dervied M-M)**
| id | user_id | role_id | 
| :---- | :----: |  :----: | 
|  1 | 1 | 1 |
|  2  | 2 | 1 |

## **Airplane**
| id | model_number | capacity |
| :---- | :----: | ----: |
|  1 | Ch. Shivaji M | 100 |
| 2  | Kempagowda |  200 |  


# Lec 3 : Implementing Models


### **Q1. What is differnce between Flight and airplane ?**
**Ans** Flight - src --> dest airplane might be same or different








### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
### Airplane -> id,model_number,capacity
### Flights ->  id,departure_city,des_city_id,airplane_id,departure,arrival,flight_num,airport_id 




## Association
  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport.





## Sequelize Command : Model

#### npx sequelize model:genrate --name City --attributes name:String 
=> create model and migration : extra attributes like id,created_at,updated_at

Note : it will not create table in DB   

Q. What Migration do?
- It will help to create incremental changes saved
- if we make changes in DB it will reflect changes
  in actual DB
- 


#### npx sequelize db:migrate 
=> make changes in database accordance with migration

#### npx sequelize db:migrate:undo


# Migration vs Model
- if we make any change on migration then it
will reflect changes in table in db
- if we make any changes in model  then it will reflect changes in javascript level

Q.How to update migration 
- first undo then migrate


Q.why need City Repository?
- To Perform CRUD operations on Model

Q.why need City Service?
- after written CRUD in method let say we want add some bussiness logic


# Q. In Service Repo created constructor not  created cityRepo
- these are two different way 
- we can use constructor or remove constructor  

# Q.How to make Association?
  Relationship -> City has many airports and Airport belongs to a city (one to many)
1. create model ->  sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
2. setup association in models
  2.1 in airpots model
       Association -> this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE"
      })
  2.2 in city model
      Association-> this.hasMany(models.Airport,{foreignKey:"cityId"})
3. changes in migration
   cityId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:'Cities',
          key:"id",
          as:"cityId"
        },
        allowNull: false,


# Q.What is seeder?
Seed the value in Airports
1. Command : npx sequelixe seed:generate --name add-airports
2.         add values in Airports
3.       : npx sequelixe db:seed:all

# Q.write a query to get get all cities and airport data based on cityId?
JOINS
select * from cities as c join airports as a on a.cityId=c.id where c.id=3;

1. Using include
const ap = await City.findAll({
            where:{
                id:3
            } 
            include : [{
                model:Airport
            }],
})

2. Using get
const city = await City.findOne({where:{
            id:3,
        }})
const ap =await city.getAirports()


# Q.Add multiple cities in bulk ?

======================================
Lec 6 : Implementing Airplane  Models 
======================================

# Created Airplane Model and Migration
Command : npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer

# Added seed for add Planes
Command : npx sequelize seed:generate --name add-airplanes

# Filter Logic
Requirement : Filter By ArrivalAirport,DepartureAirport,Price , minPrice, maxPrice




======================================
Lec 7 : Implementing Other Models 
======================================
## Created CRUD Template for Repository and Service

## Added Middleware For Flight

## Created ENUM For Error in util folder
