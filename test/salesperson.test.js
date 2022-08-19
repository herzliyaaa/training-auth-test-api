var chai = require("chai");
var chaiHttp = require("chai-http");
var API = require("../server");
chai.should();
chai.use(chaiHttp);

const { faker } = require("@faker-js/faker");

describe("Salespersons API", () => {
  describe("Login Test", () => {
    it("It should login a user and should return all the salesperson", () => {
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
            .get("/salespersons")
            .set("Authorization", token)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              res.body.length.should.not.be.equal(0);
            });

            describe("Test GET/:id route", () => {
              it("it should get an salesperson by the given id", () => {
                const salesperson_id = "1";
                var token = res.body.token;
                chai
                  .request(API)
                  .get(`/salespersons/view/${salesperson_id}`)
                  .set("Authorization", token)
                  .end((err, res) => {
                    res.should.have.status(200);
                  });
              });
            });

          describe("Test POST route", () => {
            it("it should post salesperson", (done) => {
              const newSalesperson = {
                firstname: "randomFirstName",
                middlename: "randomMiddleName",
                lastname: "randomLastName",
              };

              var token = res.body.token;
              chai
                .request(API)
                .post("/salespersons/add")
                .set("Authorization", token)
                .send(newSalesperson)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have
                    .property("message")
                    .to.equal("Salesperson Created Successfully!");
                  res.body.should.have.property("data");
                  done();
                });
            });
          });


        });
    });
  });
});
