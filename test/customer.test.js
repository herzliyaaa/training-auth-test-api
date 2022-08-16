var chai = require("chai");
var chaiHttp = require("chai-http");
var API = require("../server");

// const API = `http://localhost:${process.env.PORT}`;

var should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Customers API", () => {

  describe("Login Test", () => {
    it("It should login a user and should return all the customers", (done) => {
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
          console.log('\x1b[33m%s\x1b[0m', "/login tested");
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
              console.log('\x1b[33m%s\x1b[0m', "/customers tested");
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

  // describe("Test POST route", () => {
  //   it("it should post customer", (done) => {
  //     const newCustomer = {
  //       firstname: `herzlia`,
  //       middlename: "ramos",
  //       lastname: "barangan",
  //       address: Math.random().toString(36).slice(2),
  //       contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
  //     };

  //     chai
  //       .request(API)
  //       .post("/customers/add")
  //       .send(newCustomer)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.have
  //           .property("message")
  //           .to.equal("Customer Created Successfully!");
  //         res.body.should.have
  //           .property("data")
  //           .which.is.an("object")
  //           .and.has.property("lastname")
  //           .to.deep.equal("barangan");
  //         done();
  //       });
  //   });
  // });

  // describe("Test PUT route", () => {
  //   it("it should update an customer", (done) => {
  //     const customer_id = "218";
  //     const updateCustomer = {
  //       firstname: "herzlia",
  //       middlename: "valdez",
  //       lastname: "cruz",
  //       address: "perez",
  //       contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
  //     };

  //     chai
  //       .request(API)
  //       .put(`/customers/edit/${customer_id}`)
  //       .send(updateCustomer)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.have
  //           .property("message")
  //           .to.equal("Customer Updated Successfully!");

  //         done();
  //       });
  //   });
  // });

  // describe("Test DELETE/:id route", () => {
  //   it("it should delete an customer by the given id", (done) => {
  //     const customer_id = "101469";
  //     chai
  //       .request(API)
  //       .delete(`/customers/delete/${customer_id}`)
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
