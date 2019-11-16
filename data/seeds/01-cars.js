
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars-dealer').insert([
        { vin: "abc123", make: "toyota", model: "camry", mileage: "12345", transmission: "5 speed", status: "junk" },
        { vin: "cba321", make: "subaru", model: "impreza", mileage: "105", transmission: "CVT", status: "new" },
        { vin: "sdafagfsdfdsa", make: "dodge", model: "caliber", mileage: "325", transmission: "6 speed manual", status: "parts" },
        { vin: "6y26g2445", make: "tesla", model: "model 3", mileage: "324", transmission: "electric", status: "awesome" },
        { vin: "24532523235", make: "honda", model: "civic", mileage: "1214513245", transmission: "CVT", status: "junk" }
      ]);
    });
};
