var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = `http://localhost:${process.env.PORT}`;

const should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Customers API", () => {
  
  describe("Test GET route /customers", () => {
    it("It should return all customers", (done) => {
      chai
        .request(API)
        .get("/customers")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.not.be.equal(0);
          done();
        });
    });
  });


  describe("Test GET/:id route", () => {
    it("it should get an customer by the given id", (done) => {
      const customer_id = "193";
      chai
        .request(API)
        .get(`/customers/view/${customer_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post customer", (done) => {
      const newCustomer = {
        firstname: `herzlia ${Math.random().toString(36).slice(2)}`,
        middlename: "ramos",
        lastname: "barangan",
        address: Math.random().toString(36).slice(2),
        contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
      };

      chai
        .request(API)
        .post("/customers/add")
        .send(newCustomer)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .to.equal("Customer Created Successfully!");
          res.body.should.have
            .property("data")
            .which.is.an("object")
            .and.has.property("lastname")
            .to.deep.equal("barangan");
          done();
        });
    });
  });

  describe("Test PUT route", () => {
    it("it should update an item", (done) => {
      const customer_id = "218";
      const updateCustomer = {
        firstname: "herzlia",
        middlename: "valdez",
        lastname: "cruz",
        address: "perez",
        contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
      };

      chai
        .request(API)
        .put(`/customers/edit/${customer_id}`)
        .send(updateCustomer)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .to.equal("Customer Updated Successfully!");

          done();
        });
    });
  });

  describe("Test DELETE/:id route", () => {
    it("it should delete an item by the given id", (done) => {
      const barcode = "101469";
      chai
        .request(API)
        .delete(`/items/delete/${barcode}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
