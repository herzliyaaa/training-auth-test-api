var chai = require("chai");
var chaiHttp = require("chai-http");
var API = require("../server");

chai.use(chaiHttp);
chai.should();

const { faker } = require("@faker-js/faker");
const fs = require("fs");

describe("Customers API", () => {
  describe("Login Test", () => {
    it("It should login a user and should return all the cars", (done) => {
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
            .get("/cars")
            .set("Authorization", token)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              res.body.length.should.not.be.equal(0);
              console.log("\x1b[33m%s\x1b[0m", "/cars tested");
              done();
            });

          describe("Test GET/:id route", () => {
            it("it should get an car by the given id", () => {
              const car_id = "3";
              var token = res.body.token;
              chai
                .request(API)
                .get(`/cars/view/${car_id}`)
                .set("Authorization", token)
                .end((err, res) => {
                  res.should.have.status(200);
                });
            });
          });

          describe("Test POST route", () => {
            it("it should post car", (done) => {
              const randomSerial = faker.vehicle.vrm();
              const randomBrand = faker.vehicle.manufacturer();
              const randomModel = faker.vehicle.model();
              const randomColor = faker.vehicle.color();

              var token = res.body.token;
              chai
                .request(API)
                .post("/cars/add")
                .set("Authorization", token)
                .set("Content-Type", "multipart/form-data")
                .field("serial_number", randomSerial)
                .field("make", randomBrand)
                .field("model", randomModel)
                .field("color", randomColor)
                .field("year", "2022")
                .field("car_for_sale", "yes")

                .attach(
                  "image_file",
                  fs.readFileSync("C:/Users/BFI/Downloads/test.jpg"),
                  "http://localhost:3000/uploads/test1.jpg"
                )

                .end((err, res) => {
                  res.should.have.status(200);
                  console.log("\x1b[33m%s\x1b[0m", "Post Car Test Success");
                  done();
                });
            });
          });
        });
    });
  });
});
