// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");

// const API = `http://localhost:${process.env.PORT}`;

// const should = chai.should();
// chai.use(chaiHttp);

// // parent block
// describe("Cars API", () => {
//   describe("Test GET route /cars", () => {
//     it("It should return all cars", (done) => {
//       chai
//         .request(API)
//         .get("/cars")
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("array");
//           res.body.length.should.not.be.equal(0);
//           done();
//         });
//     });
//   });

//   describe("Test GET/:id route", () => {
//     it("it should get an car by the given id", (done) => {
//       const car_id = "193";
//       chai
//         .request(API)
//         .get(`/cars/view/${car_id}`)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });

//   describe("Test POST route", () => {
//     it("it should post car", (done) => {
//       const newCar = {
//         serial_number: "13dsad",
//         make: "honda",
//         model: Math.random().toString(36).slice(2),
//         color: "yellow",
//         year: "2020",
//         car_for_sale: "yes"
//       };

//       chai
//         .request(API)
//         .post("/cars/add")
//         .send(newCar)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.have
//             .property("message")
//             .to.equal("Car Created Successfully!");
//           res.body.should.have
//             .property("data")
//             .which.is.an("object")
//             .and.has.property("make")
//             .to.deep.equal("honda");
//           done();
//         });
//     });
//   });

//   describe("Test PUT route", () => {
//     it("it should update an car", (done) => {
//       const car_id = "218";
//       const updateCar = {
//         serial_number: "13dsad",
//         make: "honda",
//         model: Math.random().toString(36).slice(2),
//         color: "yellow",
//         year: "2020",
//         car_for_sale: "no"
//       };

//       chai
//         .request(API)
//         .put(`/cars/edit/${car_id}`)
//         .send(updateCar)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.have
//             .property("message")
//             .to.equal("Car Updated Successfully!");

//           done();
//         });
//     });
//   });

//   describe("Test DELETE/:id route", () => {
//     it("it should delete an car by the given id", (done) => {
//       const car_id = "101469";
//       chai
//         .request(API)
//         .delete(`/cars/delete/${car_id}`)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });
// });


