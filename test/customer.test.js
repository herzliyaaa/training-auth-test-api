var chai = require("chai");
var chaiHttp = require("chai-http");
var API = require("../server");
chai.should();
chai.use(chaiHttp);

const { faker } = require("@faker-js/faker");

describe("Customers API", () => {
  describe("Login Test", () => {
    it("It should login a user and should return all the customers", () => {
      chai
        .request(API)
        .post("/login")
        .send({
          email: "john@smith.com",
          password: "password",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          var token = res.body.token;

          chai
            .request(API)
            .get("/customers")
            .set("Authorization", token)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              res.body.length.should.not.be.equal(0);
            });

          describe("Test GET/:id route", () => {
            it("it should get an customer by the given id", () => {
              const customer_id = "17";
              var token = res.body.token;
              chai
                .request(API)
                .get(`/customers/view/${customer_id}`)
                .set("Authorization", token)
                .end((err, res) => {
                  res.should.have.status(200);
                });
            });
          });

          describe("Test POST route", () => {
            it("it should post customer", () => {
              const randomFirstName = faker.name.firstName();
              const randomMiddleName = faker.name.middleName();
              const randomLastName = faker.name.lastName();
              const randomAddress = faker.address.street();
              const randomContact = faker.phone.number("+63 #### ### ###");

              const newCustomer = {
                firstname: randomFirstName,
                middlename: randomMiddleName,
                lastname: randomLastName,
                address: randomAddress,
                contact: randomContact,
              };

              var token = res.body.token;
              chai
                .request(API)
                .post("/customers/add")
                .set("Authorization", token)
                .send(newCustomer)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have
                    .property("message")
                    .to.equal("Customer Created Successfully!");
                  res.body.should.have
                    .property("data")
                    .which.is.an("object")
                    .and.has.property("lastname");
                });
            });
          });

          describe("Test PUT route", () => {
            it("it should update an customer", () => {
              const customer_id = "8";
              const updateCustomer = {
                firstname: "herzlia",
                middlename: "valdez",
                lastname: "cruz",
                address: "perez subdivision",
                contact: "09268186409",
              };

              var token = res.body.token;
              chai
                .request(API)
                .patch(`/customers/edit/${customer_id}`)
                .set("Authorization", token)
                .send(updateCustomer)
                .end((err, res) => {
                  res.should.have.status(200);

                  res.body.should.have
                    .property("message")
                    .to.equal("Customer Updated Successfully!");
                });
            });
          });

          describe("Test DELETE/:id route", () => {
            it("it should delete an customer by the given id", (done) => {
              const customer_id = "6";
              var token = res.body.token;
              chai
                .request(API)
                .delete(`/customers/delete/${customer_id}`)
                .set("Authorization", token)
                .end((err, res) => {
                  res.should.have.status(200);

                  done();
                });
            });
          });
        });
    });
  });
});
