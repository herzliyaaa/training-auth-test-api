// import { faker } from '@faker-js/faker';

const { faker } = require("@faker-js/faker");
var chai = require("chai");
var chaiHttp = require("chai-http");
var API = require("../server");
var should = chai.should();
chai.use(chaiHttp);

// parent block
describe("AUTH API", () => {
  describe("Register Test", () => {
    it("It should register a user", (done) => {
      const randomName = faker.name.fullName();

      chai
        .request(API)
        .post("/register")
        .send({
          firstname: randomName,
          lastname: "Mikael",
          email: "mikael@gmail.com",
          password: "jyde",
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Login Test", () => {
    it("It should login a user and should return true if verified", (done) => {
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
          console.log("\x1b[33m%s\x1b[0m", "/login tested");
          var token = res.body.token;

          chai
            .request(API)
            .get("/customers")

            // we set the auth header with our token
            .set("token", token)

            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              res.body.length.should.not.be.equal(0);
              console.log("\x1b[33m%s\x1b[0m", "/customers tested");
              done();
            });

          // describe("Test GET/:id route", () => {
          //   it("it should get an customer by the given id", (done) => {
          //     const customer_id = "193";
          //     chai
          //       .request(API)
          //       .get(`/customers/view/${customer_id}`)
          //       .end((err, res) => {
          //         res.should.have.status(200);
          //         done();
          //       });
          //   });
          // });
        });
    });
  });
});
