
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
      const randomFirstName = faker.name.firstName();
      const randomLastName = faker.name.lastName();
      const randomEmail = faker.internet.email();
      chai
        .request(API)
        .post("/register")
        .send({
          firstname: randomFirstName,
          lastname: randomLastName,
          email: randomEmail,
          password: "admin",
        })
        .end((err, res) => {
          res.should.have.status(200);
          // console.log("\x1b[33m%s\x1b[0m", "/register tested");
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
          // console.log("\x1b[33m%s\x1b[0m", "/login tested");
          var token = res.body.token;

          chai
            .request(API)
            .get("/is-verified")
            // we set the auth header with our token
            .set("Authorization", token)

            .end((err, res) => {
              res.should.have.status(200);
              // console.log("\x1b[33m%s\x1b[0m", "verified the user");
              done();
            });
        });
    });
  });
});
