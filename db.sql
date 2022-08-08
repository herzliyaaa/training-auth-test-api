CREATE TABLE IF NOT EXISTS "cars" (
    "car_id" SERIAL PRIMARY KEY,
	"serial_number" VARCHAR(50),
    "make" VARCHAR(100),
	"model" VARCHAR(100),
	"color" VARCHAR(50),
    "year" VARCHAR(100),
    "car_for_sale" CHAR(3));


CREATE TABLE IF NOT EXISTS "customers"(
    "customer_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(100),
    "middlename" VARCHAR(100),
    "lastname" VARCHAR(100),
    "address" VARCHAR(150),
    "contact" VARCHAR(100));


CREATE TABLE IF NOT EXISTS "salespersons" (
    "salesperson_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(150),
    "middlename" VARCHAR(150),
    "lastname" VARCHAR(150));


CREATE TABLE IF NOT EXISTS "sales_invoice" (
    "invoice_id" SERIAL PRIMARY KEY,
    "invoice_number" VARCHAR(150),
    "transaction_date" DATE,
    "car_id" SERIAL REFERENCES "cars",
    "customer_id" SERIAL REFERENCES "customers",
    "salesperson_id" SERIAL REFERENCES "salespersons"
);


CREATE TABLE IF NOT EXISTS "mechanics" (
    "mechanic_id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(150),
    "middlename" VARCHAR(150),
    "lastname" VARCHAR(150));


CREATE TABLE IF NOT EXISTS "services" (
    "service_id" SERIAL PRIMARY KEY,
    "service_name" VARCHAR(150),
    "hourly_rate" NUMERIC);

CREATE TABLE IF NOT EXISTS "parts" (
    "part_id" SERIAL PRIMARY KEY,
    "part_number" VARCHAR(150),
    "description" VARCHAR(250),
    "purchase_price" NUMERIC,
    "retail_price" NUMERIC);




CREATE TABLE IF NOT EXISTS "service_ticket" (
    "service_ticket_id" SERIAL PRIMARY KEY,
    "service_ticket_number" VARCHAR(150),
    "date_received" DATE,
    "comments" VARCHAR(250),
    "date_returned" DATE, 
    "car_id" SERIAL REFERENCES "cars",
    "customer_id" SERIAL REFERENCES "customers"
);

CREATE TABLE IF NOT EXISTS "parts_used" (
    "parts_used_id" SERIAL PRIMARY KEY,
    "part_id" SERIAL REFERENCES "parts",
    "service_ticket_id" SERIAL REFERENCES "service_ticket",
    "number_used" NUMERIC,
    "price" NUMERIC
);

CREATE TABLE IF NOT EXISTS "service_mechanic" (
    "service_mechanic_id" SERIAL PRIMARY KEY,
    "mechanic_id" SERIAL REFERENCES "mechanics",
    "service_id" SERIAL REFERENCES "services",
    "service_ticket_id" SERIAL REFERENCES "service_ticket",
    "hours" NUMERIC,
    "comment" VARCHAR(250),
    "rate" NUMERIC
);


INSERT INTO cars (serial_number, make, model, color, year, car_for_sale) VALUES ('123hehe', 'Toyota', 'Vios', 'Red', '2021', 'Yes') RETURNING *;
